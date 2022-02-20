import { Button } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import type BoardConfig from '../../types/boardConfig'
import tklIso from './elements/config-defaults/tkl-iso'
import KeyConfigInput from './key-input'

interface BoardConfigProps {
  config?: BoardConfig
}

const VisualBoardLayout = styled.div<{ keySize?: number; color?: string }>`
  display: flex;
  flex-direction: column;

  .row {
    display: flex;
    flex-direction: row;
    &.row0 {
      padding-bottom: calc(${({ keySize }) => keySize}px * 0.25);
    }

    .key {
      font-size: 16px;
      height: ${({ keySize }) => keySize}px;
      width: ${({ keySize }) => keySize}px;
      color: black;
      border: 2px #151515 solid black;
      border-radius: 5px;
      display: block;
      background-color: #f7f2ea;
      -webkit-box-shadow: inset 2px -2px 1px 6px #96928d;
      -moz-box-shadow: inset 2px -2px 1px 6px #96928d;
      box-shadow: inset 2px -2px 1px 6px #96928d;
      &.u025 {
        width: calc(${({ keySize }) => keySize}px * 0.25);
      }
      &.u05 {
        width: calc(${({ keySize }) => keySize}px * 0.5);
      }
      &.u075 {
        width: calc(${({ keySize }) => keySize}px * 0.75);
      }
      &.u125 {
        width: calc(${({ keySize }) => keySize}px * 1.25);
      }
      &.u15 {
        width: calc(${({ keySize }) => keySize}px * 1.5);
      }
      &.u175 {
        width: calc(${({ keySize }) => keySize}px * 1.75);
      }
      &.u2 {
        width: calc(${({ keySize }) => keySize}px * 2);
      }
      &.u225 {
        width: calc(${({ keySize }) => keySize}px * 2.25);
      }
      &.u25 {
        width: calc(${({ keySize }) => keySize}px * 2.5);
      }
      &.u275 {
        width: calc(${({ keySize }) => keySize}px * 2.75);
      }
      &.u3 {
        width: calc(${({ keySize }) => keySize}px * 2.75);
      }
      &.u45 {
        width: calc(${({ keySize }) => keySize}px * 4.25);
      }
      &.u625 {
        width: calc(${({ keySize }) => keySize}px * 6.25);
      }
      &.isoenter {
      }
      &.ec {
        font-size: 12px;
        text-align: left;
        border-radius: 100%;
        background-color: darkgrey;
        box-shadow: inset 0 0 2px 2px #96928d;
      }
    }
    .gap {
      border: 0px;
      background-color: transparent;
      box-shadow: none;
      color: transparent;
    }
  }
`
let rawConfig: string[][] = []
for (let i = 0; i < 12; i++) {
  rawConfig.push([]) 
  for (let j = 0; j < 9; j++) {
    rawConfig[i].push('')    
  }
}


const Configurator: FC<BoardConfigProps> = ({ config = tklIso }) => {
  const [cnfg, setCnfg] = useState(config)

  useEffect(() => {
    setCnfg(config)
  }, [config])

  return (
    <>
      <h1>Configurator</h1>
      <VisualBoardLayout keySize={54} color="#f7f2ea">
        {/* row 0 */}
        <div className="row row0">
          <div className="key gap u125" />
          <div className="key" id="c:1,r:6">
            <KeyConfigInput value={rawConfig[0][6]} row={0} col={6} />
          </div>

          <div className="key gap u1" />
          <div className="key" id="c:1,r:6">
            <KeyConfigInput value={rawConfig[1][6]} row={1} col={6} />
          </div>
          <div className="key" id="c:2,r:0">
            F2
          </div>
          <div className="key" id="6">
            F3
          </div>
          <div className="key" id="7">
            F4
          </div>
          <div className="key gap u05" />
          <div className="key" id="8">
            F5
          </div>
          <div className="key" id="9">
            F6
          </div>
          <div className="key" id="10">
            F7
          </div>
          <div className="key" id="11">
            F8
          </div>
          <div className="key gap u05" />
          <div className="key" id="12">
            F9
          </div>
          <div className="key" id="13">
            F10
          </div>
          <div className="key" id="14">
            F11
          </div>
          <div className="key" id="15">
            F12
          </div>
          <div className="key gap u025" />
          <div className="key" id="16">
            *
          </div>
          <div className="key" id="17">
            *
          </div>
          <div className="key" id="18">
            *
          </div>
        </div>
        {/* row 1 */}
        <div className="row gap">
          <div className="key ec" id="1">
            - vol- <br />
            + vol+ <br />: pause
          </div>
          <div className="key gap u025" />
          <div className="key" id="3">
            `
          </div>
          <div className="key" id="3">
            1
          </div>
          <div className="key" id="4">
            2
          </div>
          <div className="key" id="5">
            3
          </div>
          <div className="key" id="6">
            4
          </div>
          <div className="key" id="7">
            5
          </div>
          <div className="key" id="8">
            6
          </div>
          <div className="key" id="9">
            7
          </div>
          <div className="key" id="10">
            8
          </div>
          <div className="key" id="11">
            9
          </div>
          <div className="key" id="12">
            0
          </div>
          <div className="key" id="13">
            -
          </div>
          <div className="key" id="14">
            =
          </div>
          <div className="key u2" id="15">
            bspc
          </div>
          <div className="key gap u025" />
          <div className="key" id="16">
            ins
          </div>
          <div className="key" id="17">
            home
          </div>
          <div className="key" id="18">
            pgup
          </div>
        </div>
        {/* row 2 */}
        <div className="row">
          <div className="key" id="1">
            F13
          </div>
          <div className="key gap u025" />
          <div className="key u125" id="2">
            tab
          </div>
          <div className="key" id="3">
            q
          </div>
          <div className="key" id="4">
            w
          </div>
          <div className="key" id="5">
            e
          </div>
          <div className="key" id="6">
            r
          </div>
          <div className="key" id="7">
            t
          </div>
          <div className="key" id="8">
            y
          </div>
          <div className="key" id="9">
            u
          </div>
          <div className="key" id="10">
            i
          </div>
          <div className="key" id="11">
            o
          </div>
          <div className="key" id="12">
            p
          </div>
          <div className="key" id="13">
            [
          </div>
          <div className="key" id="14">
            ]
          </div>
          <div className="key u175" id="15">
            enter
          </div>
          <div className="key gap u025" />
          <div className="key" id="16">
            del
          </div>
          <div className="key" id="17">
            end
          </div>
          <div className="key" id="18">
            pgdn
          </div>
        </div>

        <div className="row">
          <div className="key" id="1">
            F14
          </div>
          <div className="key gap u025" id="2" />
          <div className="key u15" id="3">
            caps lock
          </div>
          <div className="key" id="4">
            a
          </div>
          <div className="key" id="5">
            s
          </div>
          <div className="key" id="6">
            d
          </div>
          <div className="key" id="7">
            f
          </div>
          <div className="key" id="8">
            g
          </div>
          <div className="key" id="9">
            h
          </div>
          <div className="key" id="10">
            j
          </div>
          <div className="key" id="11">
            k
          </div>
          <div className="key" id="12">
            l
          </div>
          <div className="key" id="13">
            ;
          </div>
          <div className="key" id="14">
            '
          </div>
          <div className="key" id="15">
            #
          </div>
          <div className="key u15" id="16"></div>
        </div>
        <div className="row">
          <div className="key" id="1">
            F15
          </div>
          <div className="key gap u025" id="2" />
          <div className="key u125" id="3">
            lshift
          </div>
          <div className="key" id="4">
            \
          </div>
          <div className="key" id="5">
            z
          </div>
          <div className="key" id="6">
            x
          </div>
          <div className="key" id="7">
            c
          </div>
          <div className="key" id="8">
            v
          </div>
          <div className="key" id="9">
            b
          </div>
          <div className="key" id="10">
            n
          </div>
          <div className="key" id="11">
            m
          </div>
          <div className="key" id="12">
            ,
          </div>
          <div className="key" id="13">
            .
          </div>
          <div className="key" id="14">
            /
          </div>
          <div className="key u3" id="15">
            rshift
          </div>
          <div className="key gap u125" />
          <div className="key" id="16">
            up
          </div>
        </div>
        <div className="row">
          <div className="key" id="3">
            F16
          </div>
          <div className="key gap u025" id="2" />
          <div className="key u125" id="3">
            ctrl
          </div>
          <div className="key u125" id="4">
            os
          </div>
          <div className="key u125" id="5">
            lalt
          </div>
          <div className="key u625" id="6">
            _
          </div>
          <div className="key u125" id="7">
            ralt
          </div>
          <div className="key u125" id="8">
            win
          </div>
          <div className="key u125" id="9">
            fn
          </div>
          <div className="key u125" id="10">
            rctrl
          </div>

          <div className="key gap u025" />
          <div className="key" id="16">
            left
          </div>
          <div className="key" id="17">
            down
          </div>
          <div className="key" id="18">
            right
          </div>
        </div>
      </VisualBoardLayout>
      <Button onClick={() => console.log(rawConfig)}>EXPORT</Button>
    </>
  )
}

export default Configurator
