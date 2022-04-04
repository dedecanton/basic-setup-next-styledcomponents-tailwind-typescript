import tw from "twin.macro";
import styled from "styled-components";

import { StyledContainer } from "../GlobalStyles/StyledContainer";

export const Container = tw(StyledContainer)`
flex-col
justify-center    
my-8
px-5

max-w-7xl
lg:(px-8)
`;
export const SectionTitle = tw.h2`
text-3xl
font-bold
text-gray-800
text-center

lg:(text-4xl)
xl:(text-5xl)
`;

export const SectionParagraph = tw.p`
text-gray-400
text-xl
text-center
my-8
`;

export const FeaturesFilter = tw.div`
    w-full
    flex
    flex-col
    items-center
    justify-center

    md:(flex-row)

`;

type FilterTypes = {
  active: boolean;
};

export const FeaturesFilterItem = styled.p(({ active }: FilterTypes) => [
  tw`
    cursor-pointer
    relative
    w-full
    text-center
    border-t
    py-4
    text-lg
    text-gray-600

    last:border-b

    md:(border-b border-t-0)
`,
  active &&
    tw`
    before:(
        content-[''] 
        absolute 
        w-[12rem]
        bg-red-400
        bottom-0
        left-1/2
        ml-[-6rem]
        h-1.5
        md:(
            w-[14rem]
            ml-[-7rem]
            ) )`,
]);


export const FeatureContent = tw.div`
mt-16
    flex
    flex-col
    justify-between
    items-center

    md:(flex-row)
`;

export const FeatureTitle = tw(SectionTitle)`
md:(text-left mb-4)
`

export const FeatureInfo = tw.div`
    
    md:( ml-[5rem] items-center justify-center)
`

export const FeatureImage = tw.div`
    my-10

    md:(w-full)
`

export const FeatureDescription = tw.p`
text-gray-400
text-lg
text-center

md:(text-left)
`


export const FeatureButton = tw.button`
    hidden
    bg-blue-400
    text-white
    font-bold
    rounded
    mt-8
    p-3

    md:(block)
`;