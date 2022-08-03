export default function () {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  bgAudio.loop = true 
  /*Se fosse função bastava chamar com () e pronto,
  mas o loop é uma propriedade, ele começa falso e eu
  preciso colocar o valor de verdadeiro para ele ser chamado.*/

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  /*function bgAudioStart() {
    bgAudio.play()
  }*/

  return {
    pressButton, //função
    timeEnd, //função
    bgAudio //elemento (apenas para didática)
  }

}

