let box = document.getElementById("box")

box.innerHTML = "Pet me..."

function clicked () {
    console.log('function ran')
    if (box.innerHTML == 'meow') {
        box.innerHTML = 'woof'
    } else {
        box.innerHTML = 'meow'
    }
}

const myFunction = () => {
    console.log('sdkjfdsjkfh dsfhs kjfhs')
}

box.addEventListener("click", () => clicked()) 
