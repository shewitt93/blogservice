const form = document.getElementById('blogForm')
// const url = http://localhost:3000/


// function setData (data) {
//   localStorage.setItem("data", JSON.stringify(data))
//   location.pathname = "/index.html"
// }

form.addEventListener('submit', submitBlog)


function submitBlog(e){
  e.preventDefault();
  const parseData = {
    title: e.target.title.value,
    text: e.target.caption.value,
    type: e.target.style.value,
    cameratype: e.target.camera.value,
    lenstype: e.target.lens.value,
    image: e.target.userfile.value //returns a string of a path e.g."C:\fakepath\Blossom.gif"
  }

  const options = {
    method: "POST",
    body: JSON.stringify(parseData)
  }
debugger
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
