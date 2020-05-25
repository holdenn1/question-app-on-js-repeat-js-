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
            console.log(response);
            
        })
    }

}