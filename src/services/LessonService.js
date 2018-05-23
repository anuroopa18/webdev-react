const LESSON_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson';

const LESSON_API_URL_1 =
    'http://localhost:8080/api/lesson/LID';

let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllLessonsForModule(courseId,moduleId) {
        var finalURL= LESSON_API_URL.replace('CID', courseId);
        return fetch(finalURL.replace('MID', moduleId))
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