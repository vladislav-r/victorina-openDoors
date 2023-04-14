const checkBtns = document.querySelectorAll('.checkAnswersBtn');
const nameInput = document.querySelectorAll('.answerName');
const inputCorrectVar = document.querySelectorAll('.inputCorrectVar');

const score = document.querySelector('.score');

//ПРОВЕРКА ОТВЕТОВ И ОБНОЛЕНИЕ ОЧКОВ В localStorage
let localCountScore = 0;

checkBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		nameInput.forEach(input => {
			if (input.value == '') return;
			inputCorrectVar.forEach(corrects => {
				if (String(btn.id) === String(input.id) && String(btn.id) === String(corrects.id)) {
					if (corrects.textContent.trim().toLowerCase() == input.value.trim().toLowerCase()) {
						input.classList.add('correct');
						let currentScore = +localStorage.score;
						localCountScore += 20;
						currentScore += 20;
						localStorage.setItem('score', currentScore);
					} else {
						input.classList.add('notCorrect');
						corrects.classList.remove('d-none');
					}
					input.readOnly = true;
					e.target.disabled = true;
				}
			});
		});
	});
});

document.querySelector('.btnSuccessForms').addEventListener('click', e => {
	document.querySelector('.popupTitleScore').innerHTML = `Заработано очков: ${localCountScore}`;
	document.querySelector('.popupOverlay').classList.add('active');
	e.target.disabled = true;
});
