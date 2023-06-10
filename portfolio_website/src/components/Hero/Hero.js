import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
     <LeftSection>
       <SectionTitle main center>
         Welcome To <br />
         My Personal Website
       </SectionTitle>
       <SectionText>
          A highly skilled and experienced Full Stack Developer with 2 years of experience in designing and developing complex web applications. Proficient in multiple programming languages and technologies including Javascript, ReactJS, Next JS, ExpressJS, Backend Skills , and has a strong understanding of software development principles. Able to work effectively in fast-paced environments and deliver high-quality code on tight deadlines. 
       </SectionText>
       <Button target='_blank' onClick={() => window.location = 'https://drive.google.com/file/d/100-WtmHCPeISfwdJF34xQCpis9fiyp9e/view?usp=sharing' }>
         Learn More 
       </Button>
     </LeftSection>
  </Section>
);

export default Hero;