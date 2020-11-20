let submit = document.querySelector(".submit");
let reset = document.querySelector(".reset");
let input = document.querySelector("input");
let content = document.querySelector('.content')
let form = document.querySelector('form')
document.querySelector('.msgBox').style.display = "none"

input.addEventListener('input', ()=>{
        submit.style.display = "block"
        
})



input.addEventListener('input', ()=>{
    if(input.value.length === 0){
        submit.style.display = "none"
    }
})



form.addEventListener("submit", (e) => {
    e.preventDefault();
    content.textContent = input.value
    input.value=""
    document.querySelector('.msgBox').style.display = ""
    submit.style.display="none"

});

reset.addEventListener('click', ()=>{
    content.textContent = ""
    document.querySelector('.msgBox').style.display = "none"
    submit.style.display="none"
    submit.style.backgroundColor = "#273c75"
    submit.style.color = "white"
    submit.addEventListener('mouseover', ()=>{
    submit.style.backgroundColor = "#ae1438"
    })
    submit.addEventListener('mouseout', ()=>{
    submit.style.backgroundColor = "#273c75"
    })
})


