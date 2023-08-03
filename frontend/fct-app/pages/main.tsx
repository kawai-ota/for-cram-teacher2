import React from 'react';
import Menubar from '../components/Menubar';
import HomeMenubar from '../components/HomeMenu'
import Background from '../components/Background';

const Main = () => {
  return (
    <>
      <Menubar />
      <Background>
          <HomeMenubar/>
      </Background>

    </>
  );
};

export default Main;
