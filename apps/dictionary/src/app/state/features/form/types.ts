export interface IPhonetics {
  text: string;
  audio?: string;
}
export interface IDefinition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}
export interface IMeaning {
  partOfSpeech: string;
  definitions: IDefinition[]
  synonyms: string[];
  antonyms: string[];
}

export interface IDefinitionResponse {
  word: string;
  phonetic: string;
  phonetics: IPhonetics[],
  origin: string;
  meanings: IMeaning[]
  sourceUrls: string[]
}
