import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { GiHand, GiSpellBook } from 'react-icons/gi';
import { LeftSection } from './HeroStyles';
import { useSpring, animated } from 'react-spring';

const Hero = props => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        {'Hi'} <GiHand size="5rem" />
        <br />
        I'm Mayank
        <br />
      </SectionTitle>
      <SectionText>
        {' '}
        I'm a Electronics and Communication Engineering Undergraduate from{' '}
        <a href="https://www.srmist.edu.in/" target="_blank">
          SRMIST
        </a>
        , India. Currently learning the about Web Development. I mostly do
        frontend development with React and related frameworks but I've also
        explored Internet of Things and BlockChain Technology in the past.{' '}
      </SectionText>
      <Button onClick={() => (window.location = 'https://dev.to/mayank0508')}>
        {'My Blog'}
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
