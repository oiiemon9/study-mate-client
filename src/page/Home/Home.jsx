import React from 'react';
import HerroSlider from './HerroSlider';
import TopStudyPartners from './TopStudyPartners';
import HowItWorks from './HowItWork/HowItWorks';
import SuccessStories from './SuccessStories/SuccessStories';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div>
      <HerroSlider></HerroSlider>
      <TopStudyPartners></TopStudyPartners>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <SuccessStories></SuccessStories>
    </div>
  );
};

export default Home;
