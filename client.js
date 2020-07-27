const butn = document.getElementById('submitButton')
// const url = http://localhost:3000/


// function setData (data) {
//   localStorage.setItem("data", JSON.stringify(data))
//   location.pathname = "/index.html"
// }

butn.addEventListener('click', submitBlog)


function submitBlog(e){
  e.preventDefault();
  
  const parseData = {
    title: e.target.id.value,
    text: e.target.id.value,
    type: document.querySelector('#style'),
    cameratype: document.querySelector('#camera'),
    lenstype: document.querySelector('#lens'),
    // image: e.target.userfile.value //returns a string of a path e.g."C:\fakepath\Blossom.gif"
  }

  const options = {
    method: "POST",
    body: JSON.stringify(parseData)
  }

  fetch('http://localhost:3000/blog', options)
  .then(r => r.json()
  .then(() => displayData(parseData))
  .catch(console.warn)
  )}





function displayData () {
  // const data = localStorage.getItem("data")
  // const parseData = JSON.parse(data)
  const results = document.querySelector(".results")

  // parseData.map((e , index)=> {console.log(e)})

  //create element
  const element = document.createElement("section")

  element.setAttribute("id", idname)


  // element.setAttribute("id", index+1)
  element.setAttribute("class", "textOverImage item-b")
  element.setAttribute("data-title", parseData.title)
  element.setAttribute("data-text", parseData.text)
  element.setAttribute("style", `background-image:url(${parseData.image})`)

  //append element
  results.append(element)
}
