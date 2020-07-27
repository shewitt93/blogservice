const form = document.getElementById('blogForm')
const submit = document.getElementById('submitButton');
// const url = http://localhost:3000/


// function setData (data) {
//   localStorage.setItem("data", JSON.stringify(data))
//   location.pathname = "/index.html"
// }

submit.addEventListener('click', submitBlog)

// Fetch all blog posts as soon as app is loaded
getAllBlogs();

function getAllBlogs(){
    fetch('http://localhost:3000/blog')
        .then(r => r.json())
        // .then(appendBlogs) // need to append blogs to site
        .catch(console.warn)
};


function submitBlog(e){
  e.preventDefault();
  const parseData = {
    title: form.title.value,
    text: form.caption.value,
    type: form.style.value,
    cameratype: form.camera.value,
    lenstype: form.lens.value,
    image: form.userfile.value //returns a string of a path e.g."C:\fakepath\Blossom.gif"
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

function displayData (data) {
  const results = document.querySelector(".results")
  // create card
  const card = document.createElement("div")
  card.setAttribute("class", "card")
    // append inner div for card image
    const cardImage = document.createElement("div")
    cardImage.setAttribute("class", "card-image")
    cardImage.textContent = data.image;
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
