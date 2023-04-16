import { Image, Heading, Text, Container } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import logo from '../assets/square-clock.png'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

const Header = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container textAlign='center'>
        <Image src={logo} alt='logo' width={100} marginBottom='1rem' mx='auto' />
        <Heading color='white' marginBottom='1rem'>
          Cron Expressor
        </Heading>
        <Text fontSize={25} >
          Type when you want your cron to run.
        </Text>
      </Container>
    </ChakraProvider>
  )
}

export default Header

