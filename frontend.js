var btn = document.querySelector('#showModal');
var modalDlg = document.querySelector('#modal-ter');
var imageModalCloseBtn = document.querySelector('.delete');
btn.addEventListener('click', function(){
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', function(){
  modalDlg.classList.remove('is-active');
});
