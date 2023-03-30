import Aos from 'aos';
import React, { useState } from 'react';
import { ChatBot } from './components/ChatBot';
import { HelpButton } from './components/HelpButton';
import { Modal } from './components/Modal';
import { AbilityToLearn } from './components/template/AbilityToLearn';
import { AmIAbleSection } from './components/template/AmIAbleSection';
import { CallToActionSection } from './components/template/CallToActionSection';
import { Cover } from './components/template/Cover';
import { CoverContainer } from './components/template/Cover/styles';
import { EducatorsSection } from './components/template/EducatorsSection';
import { Footer } from './components/template/Footer';
import { NoCustomersSection } from './components/template/NoCustomersSection';
import { SkillsContainer } from './components/template/SkillsContainer';
import { TestmonialsSection } from './components/template/TestimonialsSection';
import 'aos/dist/aos.css';

import { GlobalStyle } from './GlobalStyles';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  Aos.init({ duration: 1200 });

  function openModal(){
    setIsModalOpen(true);
  }

  // function openChat(){
  //   setIsChatbotOpen(true);
  // }

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
      <SkillsContainer openModal={openModal} />
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
