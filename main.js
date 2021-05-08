
const metaData ="https://api.nasa.gov/planetary/apod?api_key=Rk9mT8sNMfBByOYqpOuYFp6DFxUzZUoRDNTdlHmo"
// const apiUrl = "https://api.nasa.gov/planetary/apodRk9mT8sNMfBByOYqpOuYFp6DFxUzZUoRDNTdlHmo"
const baseURL = 'https://api.nasa.gov/planetary/apod?api_key='
const key = "Rk9mT8sNMfBByOYqpOuYFp6DFxUzZUoRDNTdlHmo"
let url;


const searchForm = document.querySelector('form');
const sumbitBtn = document.querySelector('.btn');


const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchData);


function fetchData(e) {
    e.preventDefault();

    url = baseURL + key
   

    fetch(url)
    .then(result => {
        return result.json();
    })
    .then(json => {
        displayResults(json);
        console.log(json);
    })
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let article = document.createElement('article');
    let title = document.createElement('h2');
    let date= document.createElement('h4');
    let img = document.createElement('img');
    let explanation = document.createElement('p');
    

    title.innerText = json.title;
    date.innerText = json.date;
    img.src = json.url;
    explanation.innerText = json.explanation;
  

    article.appendChild(title);
    article.appendChild(date);
    article.appendChild(img);
    article.appendChild(explanation);
    section.appendChild(article);
}
