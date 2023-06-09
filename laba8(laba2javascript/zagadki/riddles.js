let riddles = [
    { question: "Вот с иголками клубок.\n" +
            "Подкатился на порог.\n" +
            "Глаза-бусинки глядят,\n" +
            "Молочка они хотят.\n"
            , answer: "Ёжик"},
    { question: "Узнать его нам просто,\n" +
            "Узнать его легко:\n" +
            "Высокого он роста\n" +
            "И видит далеко.\n", answer: "Жираф" }
];

let correctAnswers = 0;
let currentRiddle = 0;

document.getElementById('riddle').innerText = riddles[currentRiddle].question;

document.getElementById('submit').addEventListener('click', function () {
    let userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() === riddles[currentRiddle].answer.toLowerCase()) {
        correctAnswers++;
    }
    currentRiddle++;
    if (currentRiddle < riddles.length) {
        document.getElementById('riddle').innerText = riddles[currentRiddle].question;
        document.getElementById('answer').value = '';
    } else {
        document.getElementById('riddle').innerText = "Игра окончена!";
        document.getElementById('answer').style.display = 'none';
        document.getElementById('submit').style.display = 'none';
        document.getElementById('result').innerText = `Вы ответили правильно на ${correctAnswers} из ${riddles.length} загадок`;
    }
});
