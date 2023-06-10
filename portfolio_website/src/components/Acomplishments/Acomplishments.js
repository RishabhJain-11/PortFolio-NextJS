import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 800, text: 'Problems Solved on Leetcode and GFG', },
  { number: 10, text: 'Certificates from Coding Ninjas', },
  { number: 12, text: 'Coding Badges from Leetcode.', },
  { number: 1242, text: 'Contributions to Github in last 1 year', },
  { number: 800, text: 'Problems Solved on Leetcode and GFG', },
  { number: 10, text: 'Certificates from Coding Ninjas', },
  { number: 12, text: 'Coding Badges from Leetcode.', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) =>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
      </Boxes>
  </Section>
);

export default Acomplishments;
