import React from 'react'
import { IDefinition } from '../../../../state/features/form/types'
import styled from 'styled-components';

export const UnorderedList = styled.ul`
  list-style-type: none;
  counter-reset: list;
  padding: 0;
  margin: 2.4rem 0 0 0;
  text-indent: -3.5rem;
  margin-left: 4rem;

  > li:before {
    content: "• ";
    font-weight: ${({theme})=> theme.fontWeight.bold};
    font-size: ${({theme})=> theme.fontSize.fontSize2};
    color: ${({ theme })=> theme.colors.accent};
    margin-right: ${({theme})=> theme.spacing.size5};
  }
  > li {
    margin-bottom: 1rem;
  }
`;
interface Props {
  definitions: IDefinition[];
}

export function DefinitionList({ definitions }: Props) {
  return (
    <UnorderedList>
      {definitions.map(({ definition }) => {
        return <li key={definition}>
          {definition}
        </li>
      })}

    </UnorderedList>
  )
}

