import React, { useState } from "react";
import Image from "next/image";
import { Navbar, Menu, MenuLink, MenuButton, Social,StyledMenuIcon } from "./Header.style";
import { MenuIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import LogoBookmark from "./logo-bookmark.svg";
import LogoBookmarkWhite from './logo-bookmark-white.svg'
import {AiFillFacebook, AiOutlineTwitter} from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen(true);
  const handleCloseMenu = () => setMenuIsOpen(false);

  return (
    <Navbar>
        {menuIsOpen ? (
            <Image className='z-50' src={LogoBookmarkWhite}  alt='logo bookmark'></Image>
            ):
        <Image className='z-50' src={LogoBookmark}  alt='logo bookmark'></Image>
        }
      <StyledMenuIcon>
        {!menuIsOpen && <MenuIcon className='text-black' onClick={handleOpenMenu} />}
        {menuIsOpen && <XIcon className="text-white" onClick={handleCloseMenu} />}
      </StyledMenuIcon>

      <Menu
        menuIsOpen={menuIsOpen}
      >
        <MenuLink onClick={handleCloseMenu} href="#">
          Features
        </MenuLink>
        <MenuLink onClick={handleCloseMenu} href="#">
          Pricing
        </MenuLink>
        <MenuLink className='border-b' onClick={handleCloseMenu} href="#">
          Contact
        </MenuLink>
        <MenuButton
          className="listItem-button"
          onClick={handleCloseMenu}
          href="#"
        >
          Login
        </MenuButton>

        <Social>
          <AiFillFacebook />
          <AiOutlineTwitter />
        </Social>
      </Menu>
    </Navbar>
  );
};

export default Header;
