import React, { useState } from 'react';
import styled from 'styled-components'

const ContentTitleName = styled.div`
    height : 100vh;
    width : 100vw;
    display : flex;
    justify-content : space-between;
    padding : 24px;
    position : fixed;
    align-items : center;
    left :  -${props => props.showLastName}px;
`

const TitleName = styled.h1`
    font-family: Archivo;
    font-size : ${props => props.passFontSize}px;
    color : #fff;
    white-space: pre;
    position: relative;

     &:after {
        content: "";
        position: absolute;
        left: 0;
        z-index: -1;
        height : ${props => props.passFontSize*6}px;
        width  : ${props => props.passFontSize*6}px;
        background : #000;
        top : 50%;
        border-radius : 5000px;
        transform : translateY(-50%);
  }
`


export default function App() { 
    const [fontSize , setFontSize ] = useState(1)
    const [showLastName , setShowLastName ] = useState(1)

    function wheelControl(ev){
        if(fontSize < 0 ) return setFontSize(1)
        if (fontSize < 700 && ev.deltaY >= 0 ) setFontSize(fontSize * 1.1) 
            else if(fontSize < 700 || showLastName < 2 && ev.deltaY < -1 ) setFontSize(fontSize - (10 * 1.5)) 
                else if(fontSize > 700 &&  showLastName < 2871 && ev.deltaY >= 0 ) setShowLastName(showLastName + 25)
                    else if(ev.deltaY < -1  ) setShowLastName(showLastName - 25)
    }
    
    return (
        <ContentTitleName showLastName={showLastName}  onWheel={(ev)=> wheelControl(ev)}>
            <TitleName passFontSize={fontSize}>
                Caio {showLastName >= 2 ? 'Triana' : null} 
            </TitleName>
        </ContentTitleName>
    )
}