$btn = document.getElementById('btn')
$container = document.getElementById('container')


$btn.addEventListener('click', () => {
    notify('❤ White lives matter! ❤')
})

const notify = (message) => {
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerText = message
    //document.body.appendChild(div)
    $container.appendChild(div)

    setTimeout( ()=>{
        div.remove()
    }, 3000)
}
