const form = document.getElementById('blogForm')
const submit = document.getElementById('submitButton');
const image = document.querySelector("#userfile")
const search = document.getElementById("search");
// const url = http://localhost:3000/

// const url = http://localhost:3000/

// function setData (data) {
//   localStorage.setItem("data", JSON.stringify(data))
//   location.pathname = "/index.html"
// }

submit.addEventListener('click', submitBlog)
image.addEventListener('change', generatebase64)
var base64img;

// Fetch all blog posts as soon as app is loaded
getAllBlogs();

function getAllBlogs(){
    fetch('http://localhost:3000/blog')
        .then(r => r.json())
        // .then(appendBlogs) // need to append blogs to site
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
  e.preventDefault();
  const parseData = {
    title: form.title.value,
    text: form.caption.value,
    type: form.style.value,
    cameratype: form.camera.value,
    lenstype: form.lens.value,
    image: base64img //returns a string of a path e.g."C:\fakepath\Blossom.gif"
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(parseData)
  };
  console.log(options);

  fetch('http://localhost:3000/blog', options)
  .then(r => r.json())
  .then(() => displayData(parseData))
  .catch(console.warn)
  }

//   // parseData.map((e , index)=> {console.log(e)})

function displayData (data) {
  const results = document.querySelector(".results")
  // create card
  const card = document.createElement("div")
  card.setAttribute("class", "card")
    // append inner div for card image
    const cardImage = document.createElement("img")
    cardImage.setAttribute("class", "card-image")
    cardImage.src = data.image;
    card.appendChild(cardImage)
    // append inner div for title
    const cardTitle = document.createElement("p")
    cardTitle.setAttribute("class", "title is-4")
    cardTitle.textContent = data.title;
    card.appendChild(cardTitle)
    // append inner div for metadata
    const metadataContainer = document.createElement("div")
    metadataContainer.setAttribute("class", "card-footer")
    card.appendChild(metadataContainer)
    // append inner div for camera mode
    const cameraMode = document.createElement("p")
    cameraMode.setAttribute("class", "card-footer-item")
    cameraMode.textContent = data.type;
    metadataContainer.appendChild(cameraMode)
    // append inner div for camera make
    const cameraType = document.createElement("p")
    cameraType.setAttribute("class", "card-footer-item")
    cameraType.textContent = data.cameraType;
    metadataContainer.appendChild(cameraType)
    // append inner div for lens
    const lens = document.createElement("p")
    lens.setAttribute("class", "card-footer-item")
    lens.textContent = data.lenstype;
    metadataContainer.appendChild(lens)
    // append inner div for text body
    const caption = document.createElement("div")
    caption.setAttribute("class", "content")
    caption.textContent = data.text;
    card.appendChild(caption)
    results.append(card);
}

async function generatebase64() {
    const base64 = await image.files[0].convertToBase64()
      base64img = base64.result
  }
