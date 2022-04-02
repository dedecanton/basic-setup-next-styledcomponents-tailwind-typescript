import React from "react";

import Image from "next/image";

import {
  Container,
  HomeImage,
  HomeContent,
  HomeTitle,
  HomeText,
  HomeButtons,
  Button,
} from "./HomeSection.style";
import IllustrationHero from "./illustration-hero.svg";

function HomeSection() {
  return (
    <Container>
     
      <HomeImage>
        <Image src={IllustrationHero} alt="Illustration hero"></Image>
      </HomeImage>

      <HomeContent>
        <HomeTitle>A Simple Bookmark Manager</HomeTitle>
        <HomeText>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </HomeText>
        <HomeButtons>
          <Button className='bg-blue-400 text-white'>Get it on Chrome</Button>
          <Button className='bg-gray-50 text-black drop-shadow-lg'>Get it on Firefox</Button>
        </HomeButtons>
      </HomeContent>
      
    </Container>
  );
}

export default HomeSection;
