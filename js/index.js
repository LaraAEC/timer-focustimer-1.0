import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay 
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = Sound() //não possui dependências

Events({controls, timer, sound}) /*Não regsitrei em uma
variável pois não vou precisar passar pra nenhum outro
lugar. O controls, timer e sound eu iria precisar passar
como argumentos agora, por isso deixei registrado.*/ 