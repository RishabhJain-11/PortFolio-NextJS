import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillMediumCircle,AiFillYoutube,AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">749-841-6911</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jainrishabh71011@gmail.com">
          jainrishabh71011@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning New Skills Every Time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <p>Connect With Me </p>
          <SocialIcons href="https://google.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillMediumCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillTwitterSquare size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
