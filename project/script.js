const firstCommentFromSlide = document.querySelector('.js-firstComment');
const comment = [...document.querySelectorAll('.c-comment')]
const menu = document.querySelector('.js-menu')
const nav = document.querySelector('.js-nav')
const links = [...document.querySelectorAll('.js-link')]

let controlForScroll = 0
let menuImage = false
const newDiv = nav.cloneNode(false)
newDiv.classList.remove('is-disabled')

menu.addEventListener('click', e => {


    menuImage === false ? menuImage = true : menuImage = false;
    
    if(menuImage === true) {
        menu.children[0].src = './images/icon-close.svg';
        
        links.map((element) => {
            const newLinks = document.createElement('a');
            newLinks.textContent = element.textContent;
            newLinks.href = element.href;
            newLinks.classList = element.classList
            newDiv.appendChild(newLinks);
        });
        
        document.documentElement.append(newDiv);
        return false;
    };
    
    menu.children[0].src = './images/icon-hamburger.svg';
    [...newDiv.children].map(element => element.remove())
    newDiv.remove();
})

setInterval(() => {
    
    if(document.documentElement.getBoundingClientRect().width >= 1008) {
        
        if(controlForScroll == 100) {
            controlForScroll = -50
        }
    
        controlForScroll += 50
        firstCommentFromSlide.style.marginLeft = `-${controlForScroll}%`        
        return false
    }

    if(controlForScroll >= 300) {
        controlForScroll = -104
    }

    controlForScroll += 104
    firstCommentFromSlide.style.marginLeft = `-${controlForScroll}%`    

}, 3000);

