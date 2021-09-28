import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
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
          <Slogan>Made by <GiMineralHeart size ="3rem"/> with Mayank</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href ="http://github.com">
          <AiFillGithub size ="3rem" />
        </SocialIcons>
        <SocialIcons href ="http://instagram.com">
          <AiFillInstagram size ="3rem" />
        </SocialIcons>
        <SocialIcons href ="http://linkedin.com">
          <AiFillLinkedin size ="3rem" />
        </SocialIcons>
        <SocialIcons href ="http://twitter.com">
          <AiFillTwitterCircle size ="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
