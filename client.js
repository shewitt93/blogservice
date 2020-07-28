const form = document.getElementById('blogForm')
const submit = document.getElementById('submitButton');
const image = document.querySelector("#userfile")
const search = document.getElementById("search");

submit.addEventListener('click', submitBlog)
image.addEventListener('change', generatebase64)
var base64img;

let clicks = 0;

// Fetch all blog posts as soon as app is loaded
getAllBlogs();

function getAllBlogs(){
    fetch('http://localhost:3000/blog')
        .then(r => r.json())
        .then(displayData)
        .catch(console.warn)
};

File.prototype.convertToBase64 = function(){
  return new Promise(function(resolve, reject) {
         var reader = new FileReader();
         reader.onloadend = function (e) {
           e.preventDefault();
             resolve({
               fileName: this.name,
               result: e.target.result,
               error: e.target.error
             });
         };
         reader.readAsDataURL(this);
 }.bind(this));
};

// search.addEventListener('click', (e) => {
//   e.preventDefault();
//   question = form.inputMode.value;
//   console.log({question})
//   fetch(`http://localhost:3000/search?q=${question}`)
//       .then((r) => r.json())
//       .then((data) => displayData(data))
//       .catch((err) => console.warn(err));
//   });


function submitBlog(e){
  // e.preventDefault();
  clicks++;
  console.log(clicks);
  const parseData = {
    title: form.title.value,
    text: form.caption.value,
    type: form.style.value,
    cameratype: form.camera.value,
    lenstype: form.lens.value,
    image: base64img,
    id:clicks,
    comments:[]
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(parseData)
  };
  console.log(options);

  fetch('http://localhost:3000/blog', options)
  .then(r => r.json())
  .then(() => getAllBlogs())
  .catch(console.warn)
  }


function displayData (data) {
  const results = document.querySelector(".results")
  for (let i = 0; i < data.blog.length; i++) {
  // create card
  const card = document.createElement("div")
  card.setAttribute("id", `sec${i}`)
  card.setAttribute("class", "card column is-half")

      // append inner div for card image
      const cardImage = document.createElement("img")
      cardImage.setAttribute("class", "card-image")
      cardImage.src = data.blog[i].image;
      card.appendChild(cardImage)
      // append inner div for title
      const cardTitle = document.createElement("p")
      cardTitle.setAttribute("class", "title is-4")
      cardTitle.textContent = data.blog[i].title;
      card.appendChild(cardTitle)
      // append inner div for metadata
      const metadataContainer = document.createElement("div")
      metadataContainer.setAttribute("class", "card-footer")
      card.appendChild(metadataContainer)
          // append inner div for camera mode
          const cameraMode = document.createElement("p")
          cameraMode.setAttribute("class", "card-footer-item")
          cameraMode.textContent = data.blog[i].type;
          metadataContainer.appendChild(cameraMode)
          // append inner div for camera make
          const cameraType = document.createElement("p")
          cameraType.setAttribute("class", "card-footer-item")
          cameraType.textContent = data.blog[i].cameratype;
          metadataContainer.appendChild(cameraType)
          // append inner div for lens
          const lens = document.createElement("p")
          lens.setAttribute("class", "card-footer-item")
          lens.textContent = data.blog[i].lenstype;
          metadataContainer.appendChild(lens)
      // append inner div for text body
      const caption = document.createElement("div")
      caption.setAttribute("class", "content")
      caption.textContent = data.blog[i].text;
      card.appendChild(caption)
      // comment section
      const commentLabel = document.createElement("label")
          commentLabel.setAttribute("for", `commentText${i}`)
          commentLabel.textContent = "Leave a comment: "
          card.appendChild(commentLabel)
          //append comment textbar
          const commentText = document.createElement("textarea")
          commentText.setAttribute("id", `commentText${i}`)
          commentText.setAttribute("maxlength", "200")
          card.appendChild(commentText)
          //append leave comment button
          const commentButton = document.createElement("button")
          commentButton.setAttribute("class", "button is-success")
          commentButton.setAttribute("id", `commentButton${i}`)
          commentButton.textContent = "Comment"
          card.appendChild(commentButton)
          //append leave comment section
          const commentSec = document.createElement("div")
          commentSec.setAttribute("id", `commentSec${i}`)
          card.appendChild(commentSec)
    results.append(card);

    let comment = document.getElementById(`commentButton${i}`)
    comment.addEventListener("click", (e) => {
      submitComment(e,i)
    })
  }
}

async function generatebase64() {
    const base64 = await image.files[0].convertToBase64()
      base64img = base64.result
  }

  function submitComment(e,a){
    e.preventDefault();
    console.log(a);
    const commentInput = document.getElementById(`commentText${a}`)
    const parseData = {
      comment: commentInput.value,
      id: `${a}`
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(parseData)
    };
    console.log(options);

    fetch('http://localhost:3000/blog/comments', options)
    .then(r => r.json())
    .then(() => displayComment(parseData))
    .catch(console.warn)
  }

  function displayComment (data) {
  const section = document.querySelector(`#commentSec${data.id}`)
  const addComment = document.createElement("p")
  addComment.textContent = data.comment
  section.append(addComment)
}
