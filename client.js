const form = document.getElementById('blogForm')
const submit = document.getElementById('submitButton');
const image = document.querySelector("#userfile")
const giff = document.querySelector('#gifentry')
const search = document.getElementById("search");


submit.addEventListener('click', submitBlog)
image.addEventListener('change', generatebase64)
giff.addEventListener('input', getGiff)


var base64img;
var newGif;
let clicks = 0;
var counterStar = [];
var counterThumb = [];
var counterHeart = [];


// Fetch all blog posts as soon as app is loaded
getAllBlogs();

function getAllBlogs(){
    fetch('http://localhost:3000/blogs')
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

function submitBlog(e){
  e.preventDefault();

  clicks++;

  const parseData = {
    title: form.title.value,
    text: form.caption.value,
    type: form.style.value,
    cameratype: form.camera.value,
    lenstype: form.lens.value,
    image: base64img,
    gif: newGif,
    emojiCount:"",
    id:clicks,
    comments:[]
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(parseData)
  };

  fetch('http://localhost:3000/blog', options)
  // .then(console.log)
  .then(r => r.json())
  .then(() => getAllBlogs())
  .catch(console.warn)
  }

function getGiff() {
  const gifSearchTerm = document.getElementById("gifentry").value.toLowerCase();
  console.log(gifSearchTerm)
  const giphy_url = `http://api.giphy.com/v1/gifs/search?q=${gifSearchTerm}&api_key=4vehjptTgnajwmVWXFcixiyVUWg8Gu4D&limit=5`
  fetch(giphy_url)
  .then(resp => resp.json())
  .then((data) => displayGif(data))
  .catch(err => console.warn('Something went wrong!', err))
}

function displayData (data) {
  const results = document.querySelector(".results")
  results.textContent = ''
  for (let i = 0; i < data.blog.length; i++) {

  counterStar[i] = 0
  counterThumb[i] = 0
  counterHeart[i] = 0

  // create card
  const card = document.createElement("div")
  card.setAttribute("id", `sec${i}`)
  card.setAttribute("class", "card column is-half")

      // append inner div for card image
      const cardImage = document.createElement("img")
      cardImage.setAttribute("class", "card-image")

      if (!!data.blog[i].image){
      cardImage.src = data.blog[i].image;
      card.appendChild(cardImage)
    } else if (!!data.blog[i].gif) {
      cardImage.src = data.blog[i].gif;
      card.appendChild(cardImage)
    } else {
      cardImage.src = "https://via.placeholder.com/192";
      card.appendChild(cardImage)
    }
    // append inner div for title
     const titlesec = document.createElement('div')
     titlesec.setAttribute("class", "titleSec")
     card.appendChild(titlesec)
     const cardTitle = document.createElement("span")
     cardTitle.setAttribute("class", "title is-4 has-text-centered")
     cardTitle.textContent = data.blog[i].title;
     titlesec.appendChild(cardTitle)
      // edit and delete buttons
     const editButton = document.createElement('button')
     editButton.setAttribute("class", "button is-small editbutton")
     editButton.setAttribute("id", `editButton${i}`)
     editButton.textContent = "Edit"
     titlesec.appendChild(editButton)
     const deleteButton = document.createElement('button')
     deleteButton.setAttribute("class", "button is-small deletebutton")
     deleteButton.setAttribute("id", `deleteButton${i}`)
     deleteButton.textContent = "Delete"
     titlesec.appendChild(deleteButton)
      // append inner div for metadata
      const metadataContainer = document.createElement("div")
      metadataContainer.setAttribute("class", "card-footer")
      card.appendChild(metadataContainer)
          // append inner div for camera mode
          const cameraMode = document.createElement("p")
          cameraMode.setAttribute("class", "card-footer-item cameraMode")
          cameraMode.textContent = data.blog[i].type;
          metadataContainer.appendChild(cameraMode)
          // append inner div for camera make
          const cameraType = document.createElement("p")
          cameraType.setAttribute("class", "card-footer-item cameraType")
          cameraType.textContent = data.blog[i].cameratype;
          metadataContainer.appendChild(cameraType)
          // append inner div for lens
          const lens = document.createElement("p")
          lens.setAttribute("class", "card-footer-item lensType")
          lens.textContent = data.blog[i].lenstype;
          metadataContainer.appendChild(lens)
      // append inner div for text body
      const caption = document.createElement("div")
      caption.setAttribute("class", "content")
      caption.textContent = data.blog[i].text;
      card.appendChild(caption)

      const emojiContainer = document.createElement("div")
          emojiContainer.setAttribute("id", "emojiContainer")
          card.appendChild(emojiContainer)
            // append emoji reactions
            const emojiReactStar = document.createElement("a")
            emojiReactStar.setAttribute("id", `starEmoji${i}`)
            emojiReactStar.textContent = "😀"
            emojiContainer.appendChild(emojiReactStar)
            const starCount = document.createElement("span")
            starCount.setAttribute("id", `starCount${i}`)
            starCount.textContent = `${counterStar[i]}`
            emojiContainer.appendChild(starCount)

            const emojiReactThumb = document.createElement("a")
            emojiReactThumb.setAttribute("id", `thumbEmoji${i}`)
            emojiReactThumb.textContent = "👍"
            emojiContainer.appendChild(emojiReactThumb)
            const thumbCount = document.createElement("span")
            thumbCount.setAttribute("id", `thumbCount${i}`)
            thumbCount.textContent = `${counterThumb[i]}`
            emojiContainer.appendChild(thumbCount)

            const emojiReactHeart = document.createElement("a")
            emojiReactHeart.setAttribute("id", `heartEmoji${i}`)
            emojiReactHeart.textContent = "💘"
            emojiContainer.appendChild(emojiReactHeart)
            const heartCount = document.createElement("span")
            heartCount.setAttribute("id", `heartCount${i}`)
            heartCount.textContent = `${counterHeart[i]}`
            emojiContainer.appendChild(heartCount)

      // comment section
          //append comment textbar
          const commentText = document.createElement("textarea")
          commentText.setAttribute("id", `commentText${i}`)
          commentText.setAttribute("class", "commentTextArea")
          commentText.setAttribute("maxlength", "200")
          card.appendChild(commentText)
          //append leave comment button
          const commentButton = document.createElement("button")
          commentButton.setAttribute("class", "button cb")
          commentButton.setAttribute("id", `commentButton${i}`)
          commentButton.textContent = "Comment"
          card.appendChild(commentButton)
          //append leave comment section
          const commentSec = document.createElement("div")
          commentSec.setAttribute("id", `commentSec${i}`)
          commentSec.setAttribute("class", `commentSection`)
          card.appendChild(commentSec)

    results.append(card);

    const star = document.getElementById(`starEmoji${i}`)
    const thumb = document.getElementById(`thumbEmoji${i}`)
    const heart = document.getElementById(`heartEmoji${i}`)
    star.addEventListener("click", (e) => {
      emojiCounter(e,i)
    })
    thumb.addEventListener("click", (e) => {
      emojiCounter(e,i)
    })
    heart.addEventListener("click", (e) => {
      emojiCounter(e,i)
    })

    let comment = document.getElementById(`commentButton${i}`)
    comment.addEventListener("click", (e) => {
      submitComment(e,i)
    })

    let deleteButtons = document.getElementById(`deleteButton${i}`)
    deleteButtons.addEventListener("click", (e) => {
      deletePost(e,i)
    })
  }
}

function deletePost(e,a){
  console.log(`Trying to delete post${a}`)

  const parseData = {
    id: `${a}`
  };
  const options = {
    method: 'DELETE',
    body: JSON.stringify(parseData)
  };

  fetch('http://localhost:3000/blog', options)
      .then(r => r.json())
      .then(() => getAllBlogs())
      .catch(console.warn)
};


async function generatebase64() {
    const base64 = await image.files[0].convertToBase64()
      base64img = base64.result
  }

  function emojiCounter(e,a){
    if (e.path[0].id === `starEmoji${a}`){
    ++counterStar[a];
  } else if  (e.path[0].id === `thumbEmoji${a}`){
    ++counterThumb[a];
  } else if (e.path[0].id === `heartEmoji${a}`){
    ++counterHeart[a];
  }

  starCounter = document.getElementById(`starCount${a}`)
  starCounter.textContent = `+ ${counterStar[a]}`
  thumbCounter = document.getElementById(`thumbCount${a}`)
  thumbCounter.textContent = `+ ${counterThumb[a]}`
  heartCounter = document.getElementById(`heartCount${a}`)
  heartCounter.textContent = `+ ${counterHeart[a]}`

    const parseData = {
      emojiStarCount: [starCounter.textContent, thumbCounter.textContent, heartCounter.textContent],
      id: `${a}`
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(parseData)
    };
    fetch('http://localhost:3000/blog/emojis', options)
    .then(r => r.json())
    // .then(() => displayComment(parseData))
    .catch(console.warn)
  }


  function submitComment(e,a){
    e.preventDefault();
    const commentInput = document.getElementById(`commentText${a}`)
    const parseData = {
      comment: commentInput.value,
      id: `${a}`
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(parseData)
    };

    fetch('http://localhost:3000/blog/comments', options)
    .then(r => r.json())
    .then(() => displayComment(parseData))
    .catch(console.warn)
  }

  function displayGif(data){
      // console.log(data.data[Math.floor(Math.random()*5)].images.original.url)
      newGif = data.data[Math.floor(Math.random()*5)].images.original.url
}

  function displayComment (data) {
  const section = document.querySelector(`#commentSec${data.id}`)
  const addComment = document.createElement("p")
  addComment.textContent = data.comment
  section.append(addComment)
}
