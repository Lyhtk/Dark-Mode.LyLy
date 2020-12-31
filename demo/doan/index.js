//Change navigation style on scroll
window.addEventListener('scroll', event => { 
    event.preventDefault();
    let nav = document.querySelector('.header'); 
    
    (window.scrollY >= 44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});

//Active navigation on scroll
window.addEventListener('scroll', event => {
  event.preventDefault();
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

//Slider guest says
const slider = document.querySelector('.guests-says-slider');
const prevSlider = document.getElementById('prev');
const nextSLider = document.getElementById('next');

nextSLider.addEventListener('click', e => {
   e.preventDefault();
   slider.scrollBy(300, 0); 
});

prevSlider.addEventListener('click', e => {
   e.preventDefault();
   slider.scrollBy(-300, 0); 
});


// 
const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})