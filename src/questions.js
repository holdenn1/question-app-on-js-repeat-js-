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
            .then(Question.renderList)


    }
    static renderList() {
        const questions = getQuestionsFromLocalStorege()

        const html = questions.length
            ? questions.map(toCard).join(' ')
            : `<div class="mui--text-headline">Задайте свой вопрос</div>`

        const list = document.getElementById('list')

        list.innerHTML = html
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

function toCard(question) {
    return (
        `
    <div class="mui--text-black-54">
    ${new Date().toLocaleDateString()}
    ${new Date().toLocaleTimeString()}
   
    </div>
    <div>${question.text}</div>
    <br>
    `
    )
}