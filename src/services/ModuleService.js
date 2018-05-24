const MODULE_API_URL =
    'https://webdev-smr1-react.herokuapp.com/api/course/CID/module';

const MODULE_API_URL_DEL =
    'https://webdev-smr1-react.herokuapp.com/api/module/MID';

const MODULE_API_URL1 = 'https://webdev-smr1-react.herokuapp.com/api/module';

let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    deleteModule(moduleId) {
        return fetch(MODULE_API_URL_DEL.replace
        ('MID', moduleId), {
            method: 'delete'
        })
    }

    findAllModules(){
        return fetch(MODULE_API_URL1)
            .then(function(response){
                return response.json();
            });

    }


    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }


    findModuleById(moduleId){
        return fetch(
            MODULE_API_URL_DEL
                .replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })

    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }
}