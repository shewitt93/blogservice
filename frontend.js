var btn = document.querySelector('#showModal');
var modalDlg = document.querySelector('#modal-ter');
var imageModalCloseBtn = document.querySelector('.delete');
btn.addEventListener('click', function(e){
  modalDlg.classList.add('is-active');
});
imageModalCloseBtn.addEventListener('click', function(e){
  e.preventDefault();
  modalDlg.classList.remove('is-active');
});

<<<<<<< HEAD
var cancelButton = document.querySelector('.close-modal');
cancelButton.addEventListener('click', function (){
  modalDlg.classList.remove('is-active');
});
=======
imageModalCloseBtn.addEventListener('click', function(e){
  e.preventDefault();
  modalDlg.classList.remove('is-active');
});
>>>>>>> b9dba85518fcf041459a3fd9eb079579de49f957
