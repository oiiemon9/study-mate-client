import React from 'react';
import HerroSlider from './HerroSlider';
import TopStudyPartners from './TopStudyPartners';
import HowItWorks from './HowItWork/HowItWorks';
import SuccessStories from './SuccessStories/SuccessStories';

const Home = () => {
  return (
    <div>
      <HerroSlider></HerroSlider>
      <TopStudyPartners></TopStudyPartners>
      <HowItWorks></HowItWorks>
      <SuccessStories></SuccessStories>
    </div>
  );
};

export default Home;
