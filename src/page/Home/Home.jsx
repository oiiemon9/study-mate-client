import React from 'react';
import HerroSlider from './HerroSlider';
import TopStudyPartners from './TopStudyPartners';
import HowItWorks from './HowItWork/HowItWorks';
import SuccessStories from './SuccessStories/SuccessStories';
import Banner from './Banner/Banner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Study Mate</title>
        <meta
          name="description"
          content="Find your perfect study partner and achieve your goals together!"
        />
        <meta
          name="keywords"
          content="study partner, learning, education, connect"
        />
      </Helmet>
      <HerroSlider></HerroSlider>
      <TopStudyPartners></TopStudyPartners>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <SuccessStories></SuccessStories>
    </div>
  );
};

export default Home;
