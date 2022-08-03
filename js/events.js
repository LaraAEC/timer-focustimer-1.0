import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop
}from "./elements.js" //os botões estão em um arquivo, que não é o index.js.

export default function({controls,timer,sound}) {

  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })
  
  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })
  
  buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
 
  })
  
  buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })
  
  buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()
  
    if (!newMinutes) {
      timer.reset()
      return
    }
  
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })


}

/*não teve return, acredito que seja porque não retorna
função, objeto...Todos os outros arquivos js estão
retornando algo.
Este só trabalha eventos. Acredito que quando só tem eventos
não retorno um objeto.
*/

