const cells = document.querySelectorAll('div.cell')

const moveCell = function(cells, mouseX, mouseY) {
  cells.forEach(tag => {
    //get the left side and top of each circle
    const boundX = tag.getBoundingClientRect().left
    const boundY = tag.getBoundingClientRect().top
    const cellWidth = tag.getBoundingClientRect().width

    //find the difference
    const diffX = mouseX - boundX
    const diffY = mouseY - boundY
    //  console.log(diffX, diffY)
    //calc the angle to go to using tan
    const angle = Math.atan2(diffY, diffX)

    //get short version based on angle
    const cappedX = (cellWidth / 3) * Math.cos(angle)
    const cappedY = (cellWidth / 3) * Math.sin(angle)

    cellTag = tag.querySelector('div')

    cellTag.style.left = cappedX + 'px'
    cellTag.style.top = cappedY + 'px'
  })
}

document.addEventListener('mousemove', function(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY

  moveCell(cells, mouseX, mouseY)

})


const dots = document.querySelectorAll(".sm-dot")
dots.forEach(function(dot, index){
  //console.log(index)
  dot.animate([
  {transform: 'scale(1)'},
  {transform: 'scale(1.7)'},
  {transform: 'scale(1)'},
], {
    delay:300 * index,
    duration:3000,
    iterations: Infinity
  })
})

