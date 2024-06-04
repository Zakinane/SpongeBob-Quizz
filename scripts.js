function startQuiz() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('quiz-page').classList.remove('hidden');
}

function submitQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const formData = new FormData(quizForm);
    let score = 0;
    const correctAnswers = {
        question1: 'SquarePants',
        question2: 'Gary',
        question3: 'Patrick',
        question4: 'Krusty Krab',
        question5: 'Mr. Krabs',
        question6: 'Mrs. Puff',
        question7: 'Sheldon',
        question8: 'C̷̳̞̣̀ȓ̸̭̖͎͈̏à̶̢̂ḃ̸̡̝̪͙͛ ',
        question9: 'Clarinet',
        question10: 'A Pineapple'
    };

    for (const [key, value] of formData.entries()) {
        if (value === correctAnswers[key]) {
            score++;
        }
    }

    document.getElementById('quiz-page').classList.add('hidden');
    document.getElementById('score-page').classList.remove('hidden');
    const scoreMessage = document.getElementById('score-message');
    const scoreImage = document.getElementById("score-image");

    if (score === 10) {
        scoreImage.src ="img/12.png"
        scoreMessage.textContent = `10/10: Wow! You truly are a real SpongeBob fan, you probably watched it a lot and are really fond of it!`;
    } else if (score >= 7) {
        scoreImage.src ="img/13.png"
        scoreMessage.textContent = `${score}/10: Great job! You know a lot about SpongeBob.`;
    } else if (score >= 4) {
        scoreImage.src ="img/14.png"
        scoreMessage.textContent = `${score}/10: Not bad! You have a decent knowledge of SpongeBob.`;
    } else {
        scoreImage.src ="img/15.png"
        scoreMessage.textContent = `${score}/10: It looks like you need to watch more SpongeBob episodes.`;
    }
}

function shareScore() {
    const scoreMessage = document.getElementById('score-message').textContent;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(scoreMessage)}`;
    window.open(url, '_blank');
}

function restartQuiz() {
    document.getElementById('score-page').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
    document.getElementById('quiz-form').reset();
}
