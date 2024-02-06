import Routers from './Routers'
import { ChakraProvider,} from '@chakra-ui/react'
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin (gsap/ScrollTrigger);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </ChakraProvider>
    
  )
}

export default App;
