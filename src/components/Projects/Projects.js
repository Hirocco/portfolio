import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project)=>(
        <BlogCard key={project.id}>
          <Img src={project.image}/>
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Built with:</TitleContent>
            <TagList>
              {project.tags.map((tag , i)=>(
                <Tag key={tag.i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {project.visit && <ExternalLinks target='_blank' href={project.visit}>Visit project</ExternalLinks>}
            <ExternalLinks target='_blank' href={project.source}>Check out code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;