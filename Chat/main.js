const form = document.getElementById("form")
const input = document.getElementById("input")
const messages = document.getElementById("messages")



input.focus()
form.addEventListener("submit", e => handlesubmit(e))


function handlesubmit(e){
    e.preventDefault()
    // console.log(e.target.input.value)

    // create the message
    const message = document.createElement("p")
    message.innerHTML = e.target.input.value

    messages.appendChild(message)
    
    // string methods
    stringmethods(e.target.input.value)
    
    // array methods

    // learn objects

    // reset the input box
    input.value = ""
    input.focus()
}

function stringmethods(input){
    console.log(input)

}