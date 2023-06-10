import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle, AiFillYoutube, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:749-841-6911">749-841-6911</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jainrishabh71011@gmail.com">
            jainrishabh71011@gmail.com
          </LinkItem>
          <div>Or</div><br />
          <LinkItem href="mailto:codebeing11@gmail.com">
            codebeing11@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning New Skills Every Time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <p>Connect With Me </p>
          <SocialIcons href="https://github.com/RishabhJain-11">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/rishabhjaincodes/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/jainRishabhTwt">
            <AiFillTwitterSquare size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
