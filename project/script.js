const firstCommentFromSlide = document.querySelector('.js-firstComment');
const comment = [...document.querySelectorAll('.c-comment')]
const menu = document.querySelector('.js-menu')
const nav = document.querySelector('.js-nav')

let controlForScroll = 0

menu.addEventListener('click', e => {

    if(nav.style.display == 'none') {
        nav.style.display = 'block'
        menu.children[0].src = 'images/icon-close.svg'
        return false
    }

    nav.style.display = 'none'
    menu.children[0].src = 'images/icon-hamburger.svg'
})

// setInterval(() => {


    
//     for(let c in comment) {
        
//         if(c > 0) {
//             comment[c - 1] = comment[c]
//         }
//         else {
//             comment[comment.length] = comment[0]
//             comment.shift()
//         }
//         comment[0].style.marginLeft = '-50%'
//     }
    


// }, 3000);

