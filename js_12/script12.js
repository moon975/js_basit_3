const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {

    toggle.addEventListener('click', () => {

        toggle.parentNode.classList.toggle('active')

    })

})


// bir diğerini silmesi icin bunu yazabiliriz

// function sil (){

//     toggeres.forEach(togger => {

//         togger.parentNode.classList.remove('active');
//     })
// }
