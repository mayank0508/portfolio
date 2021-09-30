import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { GiMineralHeart } from 'react-icons/gi';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="thakurmayank0508@gmail.com">thakurmayank0508@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with <GiMineralHeart size ="3rem"/> by Mayank</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href ="http://github.com/mayank0508">
          <AiFillGithub size ="3rem" />
        </SocialIcons>
        <SocialIcons href ="https://www.youtube.com/channel/UCEaFjrm2tc1Rsh3zN4XDE-w/featured">
          <AiFillYoutube size ="3rem" />
        </SocialIcons>
        <SocialIcons href ="http://linkedin.com/in/mayankkumar05/">
          <AiFillLinkedin size ="3rem" />
        </SocialIcons>
        <SocialIcons href ="http://twitter.com/MayankThakurrr">
          <AiFillTwitterCircle size ="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
