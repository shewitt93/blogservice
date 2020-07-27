const form = document.getElementById('blogForm')
const submit = document.getElementById('submitButton')

// const url = http://localhost:3000/

// function setData (data) {
//   localStorage.setItem("data", JSON.stringify(data))
//   location.pathname = "/index.html"
// }

form.addEventListener('submit', submitBlog)
submit.addEventListener('click', displayData)

const testContent = { title: "This is test content" }

function submitBlog(e){
  e.preventDefault();
  debugger;
  
  const parseData = {
    // e.target - that is the button
    title: e.target.title.value,
    text: e.target.caption.value,
    type: e.target.style.value,
    cameratype: e.target.camera.value,
    lenstype: e.target.lens.value,
    image: e.target.userfile.value //returns a string of a path e.g."C:\fakepath\Blossom.gif"
  }

  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(parseData)
  // }

  // fetch('http://localhost:3000/blog', options)
  // .then(r => r.json()
  // .then(() => displayData(parseData))
  // .catch(console.warn)
  // )
} 



// function displayData () {
//   // const data = localStorage.getItem("data")
//   // const parseData = JSON.parse(data)
//   const results = document.querySelector(".results")

//   // parseData.map((e , index)=> {console.log(e)})

//   //create element
//   const element = document.createElement("section")

//   element.setAttribute("id", idname)


//   // element.setAttribute("id", index+1)
//   element.setAttribute("class", "textOverImage item-b")
//   element.setAttribute("data-title", parseData.title)
//   element.setAttribute("data-text", parseData.text)
//   element.setAttribute("style", `background-image:url(${parseData.image})`)

//   //append element
//   results.append(element)
// }


function displayData () {
  const results = document.querySelector(".results")
  // create card
  const card = document.createElement("div")
  card.setAttribute("class", "card")
    // append inner div for card image
    const cardImage = document.createElement("div")
    cardImage.setAttribute("class", "card-image")
    cardImage.textContent = "This is a card image"
    card.appendChild(cardImage)
    // append inner div for title
    const cardTitle = document.createElement("p")
    cardTitle.setAttribute("class", "title is-4")
    cardTitle.textContent = "This is a title"
    card.appendChild(cardTitle)
    // append inner div for metadata
    const metadataContainer = document.createElement("div")
    metadataContainer.setAttribute("class", "card-footer")
    card.appendChild(metadataContainer)
    // append inner div for camera mode
    const cameraMode = document.createElement("p")
    cameraMode.setAttribute("class", "card-footer-item")
    cameraMode.textContent = "Camera mode"
    metadataContainer.appendChild(cameraMode)
    // append inner div for camera make
    const cameraType = document.createElement("p")
    cameraType.setAttribute("class", "card-footer-item")
    cameraType.textContent = "Camera brand"
    metadataContainer.appendChild(cameraType)
    // append inner div for lens
    const lens = document.createElement("p")
    lens.setAttribute("class", "card-footer-item")
    lens.textContent = "Lens type"
    metadataContainer.appendChild(lens)
    // append inner div for text body
    const caption = document.createElement("div")
    caption.setAttribute("class", "content")
    caption.textContent = "Main body of text"
    card.appendChild(caption)

  results.append(card);
}  