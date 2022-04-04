import Image from "next/image";
import React, { useState } from "react";

import Feature1 from "./FeaturesImages/feature1.svg";
import Feature2 from "./FeaturesImages/feature2.svg";
import Feature3 from "./FeaturesImages/feature3.svg";

import {
  Container,
  SectionTitle,
  SectionParagraph,
  FeaturesFilter,
  FeaturesFilterItem,
  FeatureContent,
  FeatureDescription,
  FeatureImage,
  FeatureTitle,
  FeatureButton,
  FeatureInfo
} from "./FeaturesSection.style";

const features = [
  {
    filterName: "Simple Bookmarking",
    title: "Bookmark in one click",
    image: Feature1,
    description:
      "Organize you bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    filterName: "Speedy Searching",
    title: "Intelligent search",
    image: Feature2,
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    filterName: "Easy Sharing",
    title: "Share you bookmarks",
    image: Feature3,
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

function FeaturesSection() {
  const [filterActive, setFilterActive] = useState(0);

  const handleChangeFilter = (index: number) => {
    setFilterActive(index);
  };

  return (
    <Container>
      <SectionTitle>Features</SectionTitle>
      <SectionParagraph>
        Our aim to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go
      </SectionParagraph>

      <FeaturesFilter>
        {features.map((filter, index) => (
          <FeaturesFilterItem
            onClick={() => handleChangeFilter(index)}
            active={filterActive === index}
            key={index}
          >
            {filter.filterName}
          </FeaturesFilterItem>
        ))}
      </FeaturesFilter>
      <FeatureContent>
        <FeatureImage>
          <Image
            alt={features[filterActive].filterName}
            src={features[filterActive].image}
          />
        </FeatureImage>
        <FeatureInfo>
          <FeatureTitle>{features[filterActive].title}</FeatureTitle>
          <FeatureDescription>
            {features[filterActive].description}
          </FeatureDescription>
          <FeatureButton>More Info</FeatureButton>
        </FeatureInfo>
      </FeatureContent>
    </Container>
  );
}

export default FeaturesSection;
