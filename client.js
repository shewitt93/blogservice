const form = document.getElementById('form')
// const url = http://localhost:3000/


// function setData (data) {
//   localStorage.setItem("data", JSON.stringify(data))
//   location.pathname = "/index.html"
// }

form.addEventListener('submit', submitBlog)


function submitBlog(e){
  e.preventDefault();

  const parseData = {
    //add locations and data here
    title,
    text,
    filmordig,
    cameratype, 
    lenstype,
    image

  }
  const options = {
    method: "POST",
    body: JSON.stringify(parseData)

  }

  fetch(`http://localhost:3000`, options)
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
  
  //append element
  results.append(element)
  element.setAttribute("id", idname)
  

  // element.setAttribute("id", index+1)
  element.setAttribute("class", "textOverImage item-b")
  element.setAttribute("data-title", e.name)
  element.setAttribute("data-text", e.description)
  element.setAttribute("style", `background-image:url(${e.image})`)
}



