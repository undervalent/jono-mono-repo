import React from 'react'
import { getDefinition, getFormError, getFormStatus } from '../../state/features/form'
import { useAppSelector } from '../../state/hooks'
import { AudioPlayer } from './components/audio-player'
import { MeaningList } from './components/meaning'
import * as Styled from './definition-content.styles';
import { TbExternalLink } from 'react-icons/tb';
import Icon from "../../../assets/icon.svg"
export const DefinitionContent = () => {
  const definition = useAppSelector(getDefinition);
  const error = useAppSelector(getFormError);
  const status = useAppSelector(getFormStatus)

  if (!definition) return null;
  if (status === 'rejected' && error) {
    return <Styled.ErrorWrapper>
      <img src={Icon} alt='Sad face'/>
      <Styled.ErrorHeader>
        No definitions found
      </Styled.ErrorHeader>
      <Styled.ErrorText>
      {error}
      </Styled.ErrorText>
    </Styled.ErrorWrapper>
  }

  const { word, phonetic, meanings, sourceUrls } = definition;

  return (
    <section>
      <Styled.Header>
        <div>
          <Styled.Headline>{word}</Styled.Headline>
          <Styled.Phonetic>{phonetic}</Styled.Phonetic>
        </div>
        <div>
          <AudioPlayer />
      </div>
      </Styled.Header>
      <MeaningList meanings={meanings} />
      <Styled.Source>
        <Styled.SourceLabel>source</Styled.SourceLabel>
        <Styled.SourceLink href={sourceUrls[0]} target="__blank" rel="noreferrer">{sourceUrls[0]}</Styled.SourceLink>
        <TbExternalLink />
      </Styled.Source>

    </section>
  )
}

