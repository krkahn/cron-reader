import { useState } from 'react'; 
import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput'; 

const App = () => {
  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const extractKeywords = (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'applications/JSON',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Create a cron expression from this prompt'
      })
    }
  };
  return (
    <Box bg='green.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
      <Header/>
      <TextInput extractKeywords={extractKeywords}/>
      <Footer/>
      </Container>
    </Box>
  );
};
export default App;

