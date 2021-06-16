import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = props => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hola ! Welcome to <br />
        My Personal Space
      </SectionTitle>
      <SectionText> The purpose of this shit is to fuck off </SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://www.google.com/search?q=fuckoff')
        }
      >
        {' '}
        Go Fuck OFF
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
