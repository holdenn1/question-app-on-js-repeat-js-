export class Question {
    static create(question) {
        return fetch('https://questions-app-562bb.firebaseio.com/questions.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            question.id = response.name
            return question
        })
        .then(addToLocasStorage)
    }
}

function addToLocasStorage(question) {
    const all = getQuestionsFromLocalStorege()
    all.push(question)
    localStorage.setItem('questions', JSON.stringify(all))
}

function getQuestionsFromLocalStorege() { // то что хранится в localStorage
    return JSON.parse(localStorage.getItem('questions') || '[]')
}