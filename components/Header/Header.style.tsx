import tw from "twin.macro";
import styled from "styled-components";

import { StyledContainer } from "../GlobalStyles/StyledContainer";

export const Container = tw(StyledContainer)`
  justify-between
  w-full
   max-w-[1440px]
`;

export const Navbar = tw.nav`
  fixed
  top-0
  left-0
  w-full
  z-40
  flex
  justify-center
  items-center
  flex-wrap
  bg-white
  px-[2rem]
   
    mx-auto
    py-6
`;

export const StyledMenuIcon = tw.div`
    w-8
    z-50

    md:display[none]
`;

interface MenuProps {
  menuIsOpen: boolean;
}

export const Menu = styled.div(({ menuIsOpen }: MenuProps) => [
  tw`
    z-40
    flex
    flex-col
    overflow-hidden
    
    fixed
    right-[-100%]
    top-0

    w-full
    h-screen
    bg-[#252b46]
    text-white
    transition-all
    ease-in-out

    pt-[8rem]
    justify-start
    items-center

    md:(static py-0 px-8 flex-row bg-white w-auto h-auto)
    `,
  menuIsOpen && tw`right-0`,
]);

export const MenuLink = tw.a`
    text-xl
    uppercase
    border-t
    border-[rgba(255, 255, 255, .2)]
    py-5
    px-8
    cursor-pointer
    text-center
    w-[90%]

    md:(w-auto text-lg border-none py-3 px-4 text-black)
    lg:(px-8)
    `;

export const MenuButton = tw(MenuLink)`
    border-4
    border-white
    font-bold
    rounded
    mt-8
    p-3

    md:(mt-0 ml-2 py-2 px-8 bg-[hsl(0, 94%, 66%)] text-white)
`;

export const Social = tw.div`
    absolute
    bottom-12
    flex
    items-center

    svg:text-4xl
    svg:mx-5

    md:display[none]
`;
