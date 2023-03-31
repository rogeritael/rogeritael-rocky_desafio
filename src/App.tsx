import { useEffect, useState } from 'react';
import { ChatBot } from './components/ChatBot';
import { HelpButton } from './components/HelpButton';
import { Modal } from './components/Modal';
import { AbilityToLearn } from './components/template/AbilityToLearn';
import { AmIAbleSection } from './components/template/AmIAbleSection';
import { CallToActionSection } from './components/template/CallToActionSection';
import { Cover } from './components/template/Cover';
import { EducatorsSection } from './components/template/EducatorsSection';
import { Footer } from './components/template/Footer';
import { NoCustomersSection } from './components/template/NoCustomersSection';
import { SkillsSection } from './components/template/SkillsSection';
import { TestmonialsSection } from './components/template/TestimonialsSection';
import TagManager from 'react-gtm-module';
import { GlobalStyle } from './GlobalStyles';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  Aos.init({ duration: 1000 });

  useEffect(() => {
    const tagManagerArguments = {
      gtmId: 'GTM-TJ8L3JZ'
    }
    
    TagManager.initialize(tagManagerArguments);
    
  }, []);

  function openModal(){
    setIsModalOpen(true);
  }

  function closeModal(){
    setIsModalOpen(false)
  }

  return (
    <>
      <GlobalStyle />
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      <Cover openModal={openModal} />
      <NoCustomersSection openModal={openModal} />
      <CallToActionSection />
      <SkillsSection openModal={openModal} />
      <EducatorsSection openModal={openModal} />
      <TestmonialsSection />
      <AmIAbleSection openModal={openModal} />
      <AbilityToLearn openModal={openModal} />
      <Footer />

      <ChatBot isOpen={isChatbotOpen} setIsChatbotOpen={setIsChatbotOpen}/>
      <HelpButton isChatbotOpen={isChatbotOpen} setIsChatbotOpen={setIsChatbotOpen}/>
    </>
  );
}

export default App;
