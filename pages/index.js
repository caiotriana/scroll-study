import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { ContentTitleName, TitleName } from './style';
import GlobalStyle from '../assets/style';

export default function Lettering() { 
    const [fontSize , setFontSize ] = useState(1)
    const [showLastName , setShowLastName ] = useState(1)
    const [isAnimate , setIsAnimate ] = useState(true)
    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })

    function handleOnWheel(ev){
        setIsAnimate(false)
        if(fontSize < 0 ) return setFontSize(1)
        if (fontSize < 700 && ev.deltaY >= 0 ) setFontSize(fontSize * 1.1) 
            else if(fontSize < 700 || showLastName < 2 && ev.deltaY < -1 ) setFontSize(fontSize - (10 * 1.5)) 
                else if(fontSize > 700 &&  showLastName < 2871 && ev.deltaY >= 0 ) setShowLastName(showLastName + 25)
                    else if(ev.deltaY < -1  ) setShowLastName(showLastName - 25)
    }
    
    function handleMouseMove(ev) { setMousePosition({left: ev.pageX, top: ev.pageY}); }

    return (
        <>
        <Head>
            <title>Caio Triana - Web Developer</title>
            <meta property="og:title" content="Caio Triana - Web Developer" key="title" />
      </Head>
            <GlobalStyle />
            <ContentTitleName showLastName={showLastName}  onWheel={(ev)=> handleOnWheel(ev)} onMouseMove={(ev)=> handleMouseMove(ev)}>
                <TitleName passFontSize={fontSize}  style={{left:MousePosition.left , top: MousePosition.top}} isAnimate={isAnimate} >
                    Caio {showLastName >= 2 ? 'Triana' : null} 
                </TitleName>
            </ContentTitleName>
        </>
    )
}