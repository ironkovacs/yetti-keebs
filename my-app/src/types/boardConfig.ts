let families = ['Yeti', 'Wave'];

export default interface BoardConfig  {
  family: 'Yeti' | 'Wave' | 'Pad'
  name: string
  mainBoard: {
    type: 'TKL' | '60' | 'PAD'
    configM?: mainConfig
    configP?: padConfig
  }
  sideBoard?: {
    type: 'PAD'
    config: padConfig
  }
  keymap: keymap

}

export interface mainConfig { //all values are true if the setting is matcing the ISO default layout
  backspace: boolean  // backspace ISO/ANSI:true, JIS:false
  lShift: boolean     // left shift ISO: true, ANSI/JIS: false 
  rShift: boolean     // right shift ISO: true, ANSI/JIS: false 
  enter: boolean      // enter ISO/JIS: true, ANSI: false
  space: boolean      // R1 style ISO/ANSI: strue, JIS(6.25U space + 2button): false
  ec0: boolean        // Rotary encoder on 0;0
}

export interface padConfig {
  n8ec: boolean       // Rotary encoder on numpad 8 place (used for Big EC)
  nPlus: {
    double: boolean   //button style 1x2u: true, 2x1u: false -> enable encoders can be selected
    ecTop?: boolean  
    ecBot?: boolean
  }
  nEnter: {
    double: boolean   //button style 1x2u: true, 2x1u: false -> enable encoders can be selected
    ecTop?: boolean  
    ecBot?: boolean
  }
  nZero: boolean
}

export interface keymap {
  rows: number
  cols: number
  map?: string[][]
}
