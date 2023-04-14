document.querySelector('.stayHereBtn').addEventListener('click', (e) => {
  document.querySelector('.popupOverlay').classList.remove('active');
  window.scrollTo(0, 0);
});
