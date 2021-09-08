const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

// let wasInsideNav = false;
function handleEnter(e) {
    
    this.classList.add('trigger-enter');    
    background.classList.add('open');    
    
    setTimeout( () => this.classList.contains('trigger-enter') && 
        this.classList.add('trigger-enter-active'), 150);
    // setTimeout( () => {
    //     if(this.classList.contains('trigger-enter')) {
    //         this.classList.add('trigger-enter-active');
    //     }
    // }, 150);
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    
    
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        left: dropdownCoords.left - navCoords.left,
        top: dropdownCoords.top - navCoords.top
    }

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    // background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
    background.style.setProperty('transform', `rotateX(0deg) translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(e) {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

// nav.addEventListener('mouseenter', handleNavMouseEnter);
// nav.addEventListener('mouseleave', handleNavMouseLeave);

// function handleNavMouseEnter(e) {
//     if(e.clientX >= this.offsetLeft && e.clientX <= (this.offsetLeft + this.offsetWidth) &&
//         e.clientY >= this.offsetTop && e.clientY <= (this.offsetTop + this.offsetHeight)) 
//         {
//             wasInsideNav = true;        
//     } else {
//         wasInsideNav = false;        
//     }
//     console.log(wasInsideNav);
//     // console.log(wasInsideNav, e.clientX,  e.clientY, this.offsetLeft, this.offsetTop, this.offsetWidth, this.offsetHeight);
// }

// function handleNavMouseLeave(e) {
//     wasInsideNav = false;
//     console.log(wasInsideNav);
// }