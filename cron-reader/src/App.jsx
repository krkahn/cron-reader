import { useState } from 'react'; 
import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput'; 
import KeywordsModal from './components/KeywordsModal';

const App = () => {
  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Create a cron expression from this prompt\n\n' + text + ''
      })
    }

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);

    const json = await response.json();
    const data = json.choices[0].text.trim(); 
    console.log(json);
    console.log(data);
    setKeywords(data);
    setLoading(false);
  };

  const closeModal = () => {
    setIsOpen(false); 
  };

  return (
    <Box bg='green.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
      <Header/>
      <TextInput extractKeywords={extractKeywords}/>
      <Footer/>
      </Container>
      <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal}/> 
    </Box>
  );
};
export default App;

