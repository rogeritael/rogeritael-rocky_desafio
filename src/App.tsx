import React from 'react';
import { CallToActionSection } from './components/CallToActionSection';
import { Cover } from './components/Cover';
import { MaisClientesSection } from './components/MaisClientesSection';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Cover />
      <MaisClientesSection />
      <CallToActionSection />
    </>
  );
}

export default App;
