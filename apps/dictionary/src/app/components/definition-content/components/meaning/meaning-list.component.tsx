import React from 'react'
import styled from 'styled-components'

import { IMeaning } from '../../../../state/features/form/types'
import { DefinitionList } from './definition-list.component'
import { RelatedList } from './synonyms-list.component'

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction:column;
  gap:4rem;
  margin-bottom: 4rem;
`;
const Title = styled.h3`
font-size: 2.4rem;
font-style: italic;
font-weight: 700;
`
const SubTitle = styled.h4`
color: ${({ theme }) => theme.colors.lightGray};
font-size: 2rem;
font-weight: 400;
`;

export const MeaningList = ({meanings}:{meanings:IMeaning[]}) => {
  return (
    <List>
      {meanings.map((meaning,idx) => {
        return <ListItem key={`${meaning.partOfSpeech}-${idx}`}>
          <Title>{meaning.partOfSpeech}</Title>
          <SubTitle>Meaning</SubTitle>
          <DefinitionList definitions={meaning.definitions} />
          <RelatedList relatedList={meaning.synonyms} title="Synonyms" />
          <RelatedList relatedList={meaning.antonyms} title="Antonyms"/>
        </ListItem>
      })}
    </List>
  )
}
