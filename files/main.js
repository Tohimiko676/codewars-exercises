var popup =document.querySelector('.square')
var square2 =document.getElementById('2')
var mylink =document.querySelector('.opener')
var mybutton =document.querySelector('.closer')
var toggler =document.querySelector('.toggler')


mylink.addEventListener('click', function(evt){
    evt.preventDefault()
    popup.classList.add('modal-show')    
})

mybutton.addEventListener('click', function(evt){
    evt.preventDefault()
    popup.classList.remove('modal-show')    
})

toggler.addEventListener('click', function(evt){
    evt.preventDefault()
    popup.classList.toggle('modal-show')    
})

window.addEventListener('keydown', function(evt, KeyboardEvent){
    const key = event.key
    if (key === "Escape") {
        evt.preventDefault()
        if (popup.classList.contains('modal-show')) {
            popup.classList.remove('modal-show') 
        }
    } 
})


square2.addEventListener('click',async function(evt) {
    evt.preventDefault()
    square2.classList.add('modal-shake')
    await new Promise(resolve => setTimeout(resolve, 1000))
    square2.classList.remove('modal-shake')

})


