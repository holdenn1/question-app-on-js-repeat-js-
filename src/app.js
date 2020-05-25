import { Question } from './questions'
import { isValid, createModal } from './utils'
import './style.css'
const form = document.getElementById('form')
const modalBtn = document.getElementById('modal-btn')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandler)    // будет следить за тем когда я нажимаю на кнопку, когда это событие будет происходить я буду вызывать метод submitFormHandler
modalBtn.addEventListener('click', openModal)   
input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value)
})    // если в инпуте меньше символов чем 10 то тогда ее заблокировать, если больше разброкировать и разрешить отправку сообщения

function submitFormHandler(event) {
    event.preventDefault() // для того чтобы форма не перезагружалась

    if (isValid) { // если валидно то создаю вопрос
        const question = {
            text: input.value.trim(), // Метод trim() удаляет пробельные символы с начала и конца строки
            data: new Date().toJSON()
        }

        submitBtn.disabled = true // пока идет запрос кнопка будет неактивна

        Question.create(question).then(() => {
            input.value = '' // после выполнения запросса очистить input
            input.className = '' // спросить стили валидации инпута после отпраки запроса (вопроса/question)
            submitBtn.disabled = false // кнопка вновь стает активной
        })
        console.log(question)
    }
    console.log(input.value);

}

function openModal() {
    createModal('Авторизация', '<h1>Test</h1>' )
}