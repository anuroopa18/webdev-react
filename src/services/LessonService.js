const LESSON_API_URL =
    'https://webdev-smr1.herokuapp.com/api/course/CID/module/MID/lesson';

const LESSON_API_URL_1 =
    'https://webdev-smr1.herokuapp.com/api/lesson/LID';

const LESSON_API_URL_2 ='https://webdev-smr1.herokuapp.com/api/lesson';

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


    deleteLesson(lessonId) {
        return fetch(LESSON_API_URL_1.replace('LID',lessonId),
            {
                method: 'DELETE'
            });
    }

    createLesson(courseId,moduleId,lesson) {
        var finalURL= LESSON_API_URL.replace('CID', courseId);
        return fetch(finalURL.replace('MID', moduleId),
            {
                body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    findAllLessons(){
        return fetch(LESSON_API_URL_2)
            .then(function(response){
                return response.json();
            });

    }



    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }
}