import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 { 
    word-break: keep-all;
  }
  
  body {
    word-break: break-word; 
    background-color:#f8f9fa; 
  }

  #root { 
    height: 100%;
  } 

  .ant-spin-blur {
    // NOTICE: blur 필터가 적용되면 position 의 기준 위치가 달라짐
    filter: unset;
  }

  html[data-useragent*="mac"] {
    body, 
    *[class*="ant-"],
    *[class*="itsm-"] {
      font-family: 'Apple SD Gothic Neo', 'AppleGothic', 'Nanum Gothic', sans-serif !important
    }
  }

  .note-modal-backdrop {
    z-index: 999;
  }
`

export default GlobalStyle
