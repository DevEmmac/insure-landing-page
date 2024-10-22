import React from 'react';
import Humanize from './Sections/Humanize';
import Wedifferent from './Sections/Wedifferent';
import FindoutMore from './Sections/FindoutMore';
import Footer from './Sections/Footer';

const App = () => {
  return (
    <div>
      <Humanize />
      <Wedifferent />
      <FindoutMore />
      <Footer />
    </div>
   
  )
};

export default App;