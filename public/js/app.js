// Client Side Javascript
console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault() //Prevent the browser to refresh
  const location = search.value
  messageOne.textContent = "Loading..."
  messageTwo.textContent = ""
  fetch('/weather?adress=' + location).then((response) => {
  response.json().then((data) => { //Run when JSON data has arrived and parsed
    if (data.error) {
      messageOne.textContent = "Error!"
      messageTwo.textContent = data.error
    }
    else {
    messageOne.textContent = data.location
    messageTwo.textContent = data.forecast
    }
  })
})
})