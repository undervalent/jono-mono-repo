import React from 'react'
import styled from 'styled-components';

interface Props {
  relatedList: string[];
  title: string;
}
const Container = styled.section`
  display: flex;

`
const Title = styled.h5`
font-size: 2rem;
font-weight: 400;
line-height: normal;
color: ${({theme})=> theme.colors.lightGray};
`
const List = styled.ul`
display: inline-flex;
flex-wrap: wrap;
list-style: none;
gap: 1rem;
`;
const ListItem = styled.li`
color: ${({theme})=> theme.colors.accent};
font-size: 2rem;
font-weight: 700;
`


export function RelatedList({ relatedList=[], title="" }: Props) {
  if(!relatedList?.length) return null
  return (
    <Container>
      <Title>{title}</Title>
      <List>
       {relatedList.map(related => <ListItem key={related}>{related}</ListItem>)}
      </List>
    </Container>
  )
}

