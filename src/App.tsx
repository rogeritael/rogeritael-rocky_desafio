import React from 'react';
import { AmIAbleSection } from './components/template/AmIAbleSection';
import { CallToActionSection } from './components/template/CallToActionSection';
import { Cover } from './components/template/Cover';
import { CoverContainer } from './components/template/Cover/styles';
import { EducatorsSection } from './components/template/EducatorsSection';
import { MaisClientesSection } from './components/template/MaisClientesSection';
import { SkillsContainer } from './components/template/SkillsContainer';
import { TestmonialsSection } from './components/template/TestimonialsSection';

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
      <TestmonialsSection />
      <AmIAbleSection />
    </>
  );
}

export default App;
