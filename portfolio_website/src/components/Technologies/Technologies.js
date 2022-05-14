import React from 'react';
import { DiFirebase, DiReact, DiZend, DiNodejsSmall, DiDocker } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = 'tech'>
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size= "3rem" />
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experienced with <br />
            Javascript/HTML/CSS
            <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Figma & Tailwind CSS</li>
            <li>Material UI</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size= "3rem" />
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experienced with <br />
            <ul>
            <li>Node.js & Express.js</li>
            <li>Firebase</li>
            <li>Mongo DB</li>
            <li>AWS</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDocker size= "3rem" />
        <ListContainer>
          <ListTitle>
            Devops
          </ListTitle>
          <ListParagraph>
            Experienced with <br />
            <ul>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>Terraform</li>
            <li>Jenkins</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
