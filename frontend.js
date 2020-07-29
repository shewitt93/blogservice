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

var cancelButton = document.querySelector('.close-modal');
cancelButton.addEventListener('click', function(e){
  e.preventDefault();
  modalDlg.classList.remove('is-active');
});

function myFunction() {
  // Declare variables
  // let input, filter, div, card, div, i, txtValue;
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var div = document.getElementsByClassName("card");
  var card = document.getElementsByClassName('card-footer');

  // add more  docqueryselall? or add class of cam to each part with a <p>
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < div.length; i++) {
    p = card[i].getElementsByTagName("p")[0];
    console.log(p)
    txtValue = p.textContent || p.innerText;

  // console.log(card)

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < div.length; i++) {
    
    p = card[i].getElementsByTagName("p")[0];
    console.log(p)
    
    txtValue = p.textContent || p.innerText;
    

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}


