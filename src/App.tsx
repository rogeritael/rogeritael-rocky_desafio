import React from 'react';
import { CallToActionSection } from './components/CallToActionSection';
import { Cover } from './components/Cover';
import { EducatorsSection } from './components/EducatorsSection';
import { MaisClientesSection } from './components/MaisClientesSection';
import { SkillsContainer } from './components/SkillsContainer';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Cover />
      <MaisClientesSection />
      <CallToActionSection />
      <SkillsContainer />
      <EducatorsSection />
    </>
  );
}

export default App;
