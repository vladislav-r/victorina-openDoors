const resetScoreBtn = document.querySelector('.resetScoreBtn');
const resetSuccessBtn = document.querySelector('.resetSuccessBtn');
const popupTitleResetScore = document.querySelector('.popupTitleResetScore');
const popupResetScoreOverlay = document.querySelector('.popupResetScoreOverlay');
const popupVictoryOverlay = document.querySelector('.popupVictoryOverlay');
const popupTitleVictory = document.querySelector('.popupTitleVictory');
const popupSubTitleVictory = document.querySelector('.popupSubTitleVictory');

//Если очки существуют - взять их, иначе установить со значением 0
localStorage.getItem('score') ?? localStorage.setItem('score', 0);
document.querySelector('.scoreCount').innerHTML = `${localStorage.score ?? 0}`;

if (localStorage.score >= 100 && localStorage.isVictory == 'false') {
	popupVictoryOverlay.classList.add('active');
	popupTitleVictory.textContent = 'Поздравляем!';
	popupSubTitleVictory.textContent = `Вы набрали достаточное количество очков, показали свои знания и без проблем можете поступать на специальность
  Информационные системы и программирование.`;
	localStorage.isVictory = true;
}

if (localStorage.name) {
	const name = localStorage.name;
	document.querySelector('.headerLeftName').innerHTML = name;
} else {
	window.location.replace('/login');
	localStorage.isVictory = '';
	localStorage.score = 0;
}

// Сброс очков
resetScoreBtn.addEventListener('click', () => {
	if (localStorage.score != 0) {
		popupTitleResetScore.textContent = 'Сбросить очки?';
		popupResetScoreOverlay.classList.add('active');
	}
	resetSuccessBtn.addEventListener('click', () => {
		localStorage.score = 0;
		localStorage.isVictory = false;
		popupTitleResetScore.textContent = 'Очки сброшены';
	});
});
