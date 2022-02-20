import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { keyValues } from '../../types/keys'

export interface KeyInputProps {
  value: string
  row: number
  col: number
}

const KeyInput = styled.input`
  background-color: transparent;
  border: 0;
  height: calc(100% - 15px);
  width: calc(100% - 20px);
  margin: 5px 5px 0 10px;
`

const KeyConfigInput: FC<KeyInputProps> = (input) => {
  const [val, setVal] = useState(input.value)

  return (
    <div className="key" id={`c:${input.col},r:${input.row}`}>
      <KeyInput
        type="text"
        maxLength={19}
        className="key-input"
        id="c:0,r:6"
        value={val}
        onChange={() => setVal(val)}
      />
    </div>
  )
}


export default KeyConfigInput