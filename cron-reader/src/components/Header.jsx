import { Heading, Image, Text } from "@chakra-ui/react"
import logo from '../assets/square-clock.png'

const Header = () => {
  return (
  <>
      <Image src = {logo} alt = 'logo' width = { 100 } marginBottom = '1rem' />
          <Heading color ='white' marginBottom='1rem'>
        Cron Maker
      </Heading>
    <Text fontSize={25} textAlign='center'>
      Paste in when you want your cronjob to run and what you want it to run and we'll do the rest
    </Text>
  </>
  );
};

export default Header
