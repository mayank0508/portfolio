import Link from 'next/link'; // it allows us to link different pages to section in our own page
import React from 'react';
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillTwitterCircle
} from 'react-icons/ai';
import { ImQrcode } from 'react-icons/im';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignment: 'center', color: 'white' }}>
          <ImQrcode size="5rem" /> <Span> Porfolio </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="http://github.com/mayank0508">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/channel/UCEaFjrm2tc1Rsh3zN4XDE-w/featured">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mayankkumar05/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/MayankThakurrr">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
