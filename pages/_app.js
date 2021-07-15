import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AluraKutCommons';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {   
    font-family: sans-serif; 
    background-color: #D9E6F6;
    background-image: url(https://images5.alphacoders.com/314/314574.png);
    background-size: cover;
    background-position: center;
  }
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}
img{
  max-width: 100%;
  height: auto;
  display: block;
}

${AlurakutStyles};
`

const theme = {
  colors: {
    primary: '#0070f3',
    
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
