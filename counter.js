const number = document.getElementById("number")
let stepper = parseInt(prompt("Enter a number to increase or decrease. If you do not enter any number it can be negtive number also."))
let count = 0

const check = () => {
    
    if (count === 0){
        number.style.color = "yellow"
    } 

    if (count < 0){
        number.style.color = "red"
    } 

    if (count > 0){
        number.style.color = "green"
    } 
}

const Increase = () => {

    count += stepper
    number.innerText = count
    check()
}


const Decrease = () => {

    count -= stepper
    number.innerText = count
    check()

}


const Reset = () => {
    number.innerText = 0
    check()
}

check()