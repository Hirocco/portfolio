import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+48-534-380-081'>+48-534-380-081</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href='mailto:futuredev69@gmail.com'>futuredev69@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating,developing & solving</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/Hirocco'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://linkedin.com'>
          <AiFillLinkedin size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://instagram.com/hir2oo'>
          <AiFillInstagram size='3rem'/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
