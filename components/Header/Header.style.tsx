import tw, { styled } from "twin.macro";


export const Navbar = tw.nav`
    flex
    justify-between
    items-center
    flex-wrap
    bg-white
    pt-[1rem]
    px-[2rem]
    max-w-[1440px]
    mx-auto
    mt-6

    md:mt-4
    
`;

export const StyledMenuIcon = tw.div`
    w-8
    z-50

    md:display[none]
`;

interface MenuProps {
  menuIsOpen?: string;
}

export const Menu = styled.div(({ menuIsOpen }: MenuProps) => [
  tw`
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

`;
