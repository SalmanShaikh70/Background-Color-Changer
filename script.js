const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener("click", function(params){
        if(params.target.id === "grey"){
            body.style.backgroundColor = params.target.id
        }
        if(params.target.id === "white"){
            body.style.backgroundColor = params.target.id
        }
        if(params.target.id === "blue"){
            body.style.backgroundColor = params.target.id
        }
        if(params.target.id === "yellow"){
            body.style.backgroundColor = params.target.id
        }
        if(params.target.id === "orange"){
            body.style.backgroundColor = params.target.id
        }
        if(params.target.id === "pink"){
            body.style.backgroundColor = params.target.id
        }
    })
})

