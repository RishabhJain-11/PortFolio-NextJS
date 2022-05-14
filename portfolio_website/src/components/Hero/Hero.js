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
          The purpose of mine is to help aspiring and established developers to take their development to the next level and build awesome apps. 
       </SectionText>
       <Button onClick={() => window.location = 'file:///C:/Users/Rishabh/Downloads/CIS_Grad_Template__Dev_.pdf'}>
         Learn More 
       </Button>
     </LeftSection>
  </Section>
);

export default Hero;