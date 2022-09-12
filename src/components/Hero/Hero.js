import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello , Welcome <br/>
        To My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Kamil and I've been studying web development for past year.Exploring new discovered path of frontend led me to finding passion in it and pushed me to study and code better and better websites.My progress can be seen on my git repository in which I have few of my projects.
      </SectionText>
      <Button onClick={()=>window.location = 'https://discord.com/channels/@Hirocco#4011'}>Project Idea ? <br/> Click here!</Button>
    </LeftSection>
  </Section>
);

export default Hero;