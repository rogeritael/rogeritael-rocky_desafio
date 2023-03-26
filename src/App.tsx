import React from 'react';
import { AbilityToLearn } from './components/template/AbilityToLearn';
import { AmIAbleSection } from './components/template/AmIAbleSection';
import { CallToActionSection } from './components/template/CallToActionSection';
import { Cover } from './components/template/Cover';
import { CoverContainer } from './components/template/Cover/styles';
import { EducatorsSection } from './components/template/EducatorsSection';
import { Footer } from './components/template/Footer';
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
      {/* <EducatorsSection /> */}
      {/* <TestmonialsSection /> */}
      {/* <AmIAbleSection /> */}
      {/* <AbilityToLearn /> */}
      <Footer />
    </>
  );
}

export default App;
