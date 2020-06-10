import React, { useState } from 'react';
import { ContentTitleName, TitleName } from './style'

export default function Lettering() { 
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