import React from 'react';
import { DiFirebase, DiReact, DiZend, DiNodejsSmall, DiDocker } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experienced with - <br />
            Javascript/HTML/CSS
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Figma & Tailwind CSS</li>
              <li>Material UI</li>
              <li>Redux</li>
              <li>Rapid-API</li>
              <li>Sanity</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experienced with - <br />
            <ul>
              <li>Node.js & Express.js</li>
              <li>Firebase</li>
              <li>SQL & Mongo DB</li>
              <li>Python-Django</li>
              <li>Rest API</li>
              <li></li>
              <li>Version Control - Git</li>
              <li>Basics of AWS, GoogleCP</li>
              <li>Server-side Caching & Performance Optimization</li>
              <li>Apache Kafka & RabbitMQ</li>
              <li>Docker and Kubernetes</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>
            Other Tech Domains.
          </ListTitle>
          <ListParagraph>
            Experienced with - <br />
            <ul>
              <li>thirdweb</li>
              <li>Solidity</li>
              <li>Ethereum</li>
              <li>Decentralized Finance (DeFi) apps</li>
              <li>Smart Contracts Making</li>
              <li>Decentralized Applications (dApps)</li>
              <li>TensorFlow, scikit-learn, Keras, PyTorch</li>
              <li>Pandas, Matplotlib, Seaborn</li>
              <li>CNN, RNN, LSTM, GAN</li>
              <li>Regression, Classification, Clustering, Decision Trees, Random Forests, SVM</li>
              <li>Jenkins</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
