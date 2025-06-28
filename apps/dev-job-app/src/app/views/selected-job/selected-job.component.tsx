import React from 'react';
import { useParams } from 'react-router-dom';
import {
  PageWrapper,
  Header,
  Footer,
  Content,
  ContentItem,
  Container,
  OrderedList,
  UnorderedList,
} from './selected-job.styles';
import { useAppSelector } from '../../state';
import { Button, LogoItem } from '../../shared-components';
import { ContentWrapper } from '../../lib/styles';

export const SelectedJob = () => {
  const { id }: any = useParams();
  const { entities } = useAppSelector((state) => {
    return {
      entities: state.jobList.entities,
    };
  });
  const job = id ? entities[id] : null;
  if (!id) return <>This invoice doesn't exist!</>;
  if (!job) return <>This Job doesn't exist!</>;
  const {
    company,
    website,
    logo,
    logoBackground,
    contract,
    postedAt,
    location,
    position,
    description,
    requirements,
    role,
    apply,
  } = job;

  const applyButton = (
    <div className="apply-button-wrapper">
      <Button href={apply} purpose="primary">
        Apply Now
      </Button>
    </div>
  );

  const generateRequirements = (
    <ContentItem>
      <h4 className="subhead">Requirements</h4>
      <p>{requirements.content}</p>
      <UnorderedList>
        {requirements.items.map((el: string) => (
          <li key={el}>{el}</li>
        ))}
      </UnorderedList>
    </ContentItem>
  );

  const generateRole = (
    <ContentItem>
      <h4 className="subhead">What you will do</h4>
      <p>{role.content}</p>
      <OrderedList>
        {role.items.map((el: string) => (
          <li key={el}>{el}</li>
        ))}
      </OrderedList>
    </ContentItem>
  );

  return (
    <Container>
      <ContentWrapper>
        <PageWrapper>
          <Header>
            <div className="headline-wrapper">
              <h2 className="selected-headline">{company}</h2>
              <a className="company-link" href={website}>
                company
              </a>
            </div>

            <div className="logo-wrapper">
              <LogoItem
                expandable
                logo={logo}
                company={company}
                background={logoBackground}
              />
            </div>
            <div className="button-wrapper">
              <Button href={website} purpose="secondary">
                Company Site
              </Button>
            </div>
          </Header>
          <Content>
            <header className="content-header">
              <div className="content-header__info">
                <h3 className="headline">{position}</h3>
                <div className="info-text">
                  {postedAt} <span className="info-circle">•</span> {contract}
                </div>
                <div className="location-text">{location}</div>
              </div>
              {applyButton}
            </header>
            <section>
              <p>{description}</p>
              {generateRequirements}
              {generateRole}
            </section>
          </Content>
        </PageWrapper>
      </ContentWrapper>
      <Footer>
        <div className="footer-content">
          <div className="footer__info">
            <h2>{position}</h2>
            <p>{company}</p>
          </div>
          {applyButton}
        </div>
      </Footer>
    </Container>
  );
};
