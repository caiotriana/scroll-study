import styled from 'styled-components'

const ContentTitleName = styled.div`
    height : 100vh;
    width : 100vw;
    display : flex;
    justify-content : space-between;
    padding : 24px;
    position : fixed;
    // align-items : center;
    left :  -${props => props.showLastName}px;
`

const TitleName = styled.h1`
    font-family: Archivo;
    font-size : ${props => props.passFontSize}px;
    color : #fff;
    white-space: pre;
    position: relative;
    height : max-content;

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
        animation: ${props => props.isAnimate ? 'pulseSize 2s infinite' : ''};
  }
  

  @keyframes pulseSize { 
      0% { 
        transform : scale(1)
      }
      50% { 
        transform : scale(2)
      }
      100% { 
        transform : scale(1)
      }
  }
`

export {ContentTitleName, TitleName }