/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input, .section-par, .contact__button',{interval: 200}); 

const banner = document.getElementById('nh');
const banner2 = document.getElementById('jl');
const banner3 = document.getElementById('acc');
const banner4 = document.getElementById('ara');
const banner5 = document.getElementById('rfam');
/* const banner6 = document.getElementById('sendbtn'); */
// Add a click event listener to the banner
banner.addEventListener('click', function(event) {
    // Prevent the default action (if it's an anchor tag with a href, it won't navigate)
    event.preventDefault();
    
    // Display the alert
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Page not available yet, coming soon... 😃",
      });
});
banner2.addEventListener('click', function(event) {
    // Prevent the default action (if it's an anchor tag with a href, it won't navigate)
    event.preventDefault();
    
    // Display the alert
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Page not available yet, coming soon... 😃",
      });
});
banner3.addEventListener('click', function(event) {
    // Prevent the default action (if it's an anchor tag with a href, it won't navigate)
    event.preventDefault();
    
    // Display the alert
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Page not available yet, coming soon... 😃",
      });
});
banner4.addEventListener('click', function(event) {
    // Prevent the default action (if it's an anchor tag with a href, it won't navigate)
    event.preventDefault();
    
    // Display the alert
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Page not available yet, coming soon... 😃",
      });
});
banner5.addEventListener('click', function(event) {
    // Prevent the default action (if it's an anchor tag with a href, it won't navigate)
    event.preventDefault();
    
    // Display the alert
    let timerInterval;
        Swal.fire({
        title: "You will be redirected to RFAM's home page",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
            
        },
        willClose: () => {
            clearInterval(timerInterval);
            window.location.href = "https://rfam.io/";
          }
        
        }).then((result) => {
        /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
});
/* banner6.addEventListener('click', function(event) {
    // Prevent the default action (if it's an anchor tag with a href, it won't navigate)
    event.preventDefault();
    
    // Display the alert
    Swal.fire({
        title: "Sorry! 🥺",
        text: "This button doesn't work yet.",
        imageUrl: "../assets/img/sr.png",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Custom image"
      });
}); */

document.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const blobImg = document.querySelector('.home__blob-img');

    // Adjust the parallax speed as needed
    const speed = 0.2;

    blobImg.style.transform = 'translateY(' + scrollPosition * speed + 'px)';
});

let lastScrollTop = 0;
const header = document.querySelector('.l-header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Downscroll
        header.style.top = '-100px'; // Adjust this value as needed
    } else {
        // Upscroll
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});