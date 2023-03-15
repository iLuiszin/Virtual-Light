var light = window.document.getElementById('light')

function isBroken() {

  if (light.src.match('./img/lightbroken.svg')) {
    return true
  } else {
    return false
  }
  
}

function TurnOn() {
  if (!isBroken()) {
    light.src = './img/lighton.svg'
  }
}

function TurnOff() {
  if (!isBroken()) {
    light.src = './img/lightbulb.svg'
  }
}

light.addEventListener('click', Break)
function Break() {
  light.src = './img/lightbroken.svg'
}
