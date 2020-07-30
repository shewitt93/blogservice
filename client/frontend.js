// const fetch = require('node-fetch')
var btn = document.querySelector('#showModal');
var modalDlg = document.querySelector('#modal-ter');
var imageModalCloseBtn = document.querySelector('.delete');
var cancelButton = document.querySelector('.close-modal');


if (btn != null){
console.log(btn)
btn.addEventListener('click', function(e){
  modalDlg.classList.add('is-active');
});}

if (imageModalCloseBtn != null){
  console.log(imageModalCloseBtn)
imageModalCloseBtn.addEventListener('click', function(e){
  e.preventDefault();
  modalDlg.classList.remove('is-active');
});}

if (cancelButton != null){
console.log(cancelButton)
cancelButton.addEventListener('click', function(e){
  e.preventDefault();
  modalDlg.classList.remove('is-active');
});}

function myFunction() {
  // Declare variables
  // let input, filter, div, card, div, i, txtValue;
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var div = document.getElementsByClassName("card");
  var card = document.getElementsByClassName('card-footer');

  // add more  docqueryselall? or add class of cam to each part with a <p>
  // Loop through all list items, and hide those who don't match the search query

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



// module.exports.frontEnd = frontEnd;
// var frontEnd = function(req,res){
//   res.render('frontEnd');
// }
