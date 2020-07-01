const bang = document.querySelector('div.blow-up-circle')
const taglineSection = document.querySelector('.one_sentence')
const tagline = document.querySelector('.tagline')
const bound = taglineSection.getBoundingClientRect()

//on scroll, make the circle blow up/ blow-down
//start counting pixels

document.addEventListener('scroll', function() {
  const pxScrolled = window.pageYOffset

  if (bound.top <= pxScrolled) {
    const amount = (pxScrolled - bound.top) * 1.7
    bang.style.transform = `scale(${0.2 * amount})`
    //console.log('height of bang is: ' + bang.getBoundingClientRect().height)
  }
  if (bang.getBoundingClientRect().width >= tagline.getBoundingClientRect().width * 0.8) {
    //taglineSection.style.backgroundColor = `var(--red)`
    tagline.style.color = '#ffffff'
  } else {
    tagline.style.color = '#333333'
  }

  // console.log(0.7 * (pixels - bound.top))
})

//add more images to the marquee
$(function() {
  var marqueeClass = '.marquee-stage'
  var $tickerText = $(marqueeClass).children()
  $tickerText.clone().appendTo(marqueeClass)
  $tickerText.clone().appendTo(marqueeClass)
  $tickerText.clone().appendTo(marqueeClass)
})

//from inView on github
//detect when section enters viewport,
//when it's in, add "in-viewport "
inView('.section')
  .on('enter', section => {
    //classList.add is the same as jquery addClass, except in vanilla JS
    section.classList.add('in-viewport')
    console.log('in view')
  })
  .on('exit', section => {
    section.classList.remove('in-viewport')
    console.log('out of view')
  })

//here, we set the class to add onto elements only once its scrolled 50% into the page.
//this is from the github page that we got the other JS script from!!
inView.threshold(0.5)

//select all sections, loop through
//grab shapes and dots
// add transition delay
//make sure dots always fade in after circles

const sections = document.querySelectorAll("section")

sections.forEach((section, index) => {
  //use querySelector on each section to grab things
  const circles = section.querySelectorAll('.circle')
  const dots = section.querySelectorAll('.sm-dot')

  circles.forEach((circle, index) =>{
    const delay = index*200
    circle.style.transitionDelay =  `${delay}ms`
  })
  
  dots.forEach((dot, index)=>{
    const delay = (circles.length + index) * 200
    dot.style.transitionDelay =`${delay}ms`
  })

})


//taken from Gosseti on github
// grab all the anchor tags on the page
const anchors = document.querySelectorAll('a, button')

// loop over them
anchors.forEach(anchor => {
  // listen for clicks on each one
  anchor.addEventListener('click', event => {
    // grab the href attribute
    const href = anchor.getAttribute('href')
    // if the href starts with a #
    if (href.charAt(0) === '#') {
      // stop the default action
      event.preventDefault()
      // find the element the href points to and scroll it into view
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      })
    }
  })
})