import tw from "twin.macro";
import { StyledContainer } from "../GlobalStyles/StyledContainer";


export const Container = tw(StyledContainer)`
    pt-8
    flex-col
    justify-between

    px-0.5
    my-[5rem]
    md:(w-[95%])
    lg:(px-[2rem] flex-row-reverse)
`;
export const HomeImage = tw.div`
    flex
    justify-center
    items-center
    w-full

    sm:(w-[70%])
    md:(w-[60%])
    lg:(w-full)

`;

export const HomeContent = tw.div`
    w-full
    mt-8
    px-5

    lg:(px-10)
`;

export const HomeTitle = tw.h1`

    text-3xl
    font-bold
    text-gray-800
    text-center

    lg:(text-4xl text-left)
    xl:(text-5xl)
`;

export const HomeText = tw.p`
    text-gray-400
    text-xl
    text-center
    my-8

    lg:(text-left)
`;

export const HomeButtons = tw.div`
    flex
    items-center
    justify-center
    w-full

    lg:(justify-start)
`;

export const Button = tw.button`
    px-4
    py-2
    rounded
    
    last:ml-8
`;
