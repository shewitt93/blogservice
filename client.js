const form = document.getElementById('form')
const search = document.getElementById('search')
// const lucky = document.getElementById('')

function setData (data) {
  localStorage.setItem("data", JSON.stringify(data))
  location.pathname = "/index.html"
}

function displayData () {
  const data = localStorage.getItem("data")
  const parseData = JSON.parse(data)
  const results = document.querySelector(".results")

  parseData.map((e , index)=> {console.log(e)})
  //create element
  const element = document.createElement("a")
  //append element
  results.append(element)
  element.setAttribute("id", index+1)
  element.setAttribute("class", "textOverImage item-b")
  element.setAttribute("data-title", e.name)
  element.setAttribute("data-text", e.description)
  element.setAttribute("style", `background-image:url(${e.image})`)
}

if (search != null){
search.addEventListener("click", (e) => {
    e.preventDefault();
    question = form.input.value; //BUG: breaks when '&' is included in search
    question = titleCase(question);
    console.log({question})
    fetch(`http://localhost:3000/search?q=${question}`)
      .then((r) => r.json())
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  })};
