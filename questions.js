function checkAnswer(questionId, correctAnswer) {
    const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
    const feedback = document.getElementById(`feedback-${questionId}`);
    if (selectedOption) {
        if (selectedOption.value === correctAnswer) {
            feedback.querySelector('.correct').style.display = 'block';
            feedback.querySelector('.incorrect').style.display = 'none';
        } else {
            feedback.querySelector('.correct').style.display = 'none';
            feedback.querySelector('.incorrect').style.display = 'block';
        }
        feedback.style.display = 'block';
    } else {
        alert('Please select an option.');
    }
}

function toggleExplanation(explanationId, button) {
    const explanation = document.getElementById(explanationId);
    if (explanation.style.display === 'none') {
        explanation.style.display = 'block';
        button.textContent = 'Close Explanation';
    } else {
        explanation.style.display = 'none';
        button.textContent = 'Show Explanation';
    }
}

function toggleTip(tipId) {
    const tip = document.getElementById(tipId);
    if (tip.style.display === 'none') {
        tip.style.display = 'block';
    } else {
        tip.style.display = 'none';
    }
}
