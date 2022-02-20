import BoardConfig, { mainConfig } from "../../../../types/boardConfig";

const mainConfigIso: mainConfig =  {
  backspace: true,
  lShift: true,
  rShift: true,
  enter: true,
  space: true,
  ec0: true
}

const tklIso:BoardConfig ={
  family: 'Yeti',
  name: 'Yeti TKL ISO',
  mainBoard: {
    type: 'TKL',
    configM: mainConfigIso
  },
  keymap: {
    rows: 9,
    cols:10,
    map: [['ds']]
  }
}



export default tklIso