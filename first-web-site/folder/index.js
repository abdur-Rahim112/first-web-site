let counter = 0;

function clickMe() {
    const element = document.getElementById('count')
    element.innerText=counter

    counter += 1
}


const btn = document.getElementById('minu-btn')

btn.addEventListener('click',function(){

    const element = document.getElementById('count')
    element.innerText=counter

    counter -= 1



})








// const btn = document.getElementById('minu-btn');
// btn.addEventListener('click',function(){

// const element = document.getElementById('count')
// count -= 1
// element.innerText=count
// })
