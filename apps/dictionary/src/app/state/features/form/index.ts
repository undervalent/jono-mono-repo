
import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IDefinitionResponse } from "./types"


export const fetchDefinition = createAsyncThunk<IDefinitionResponse, string>(
  'form/fetchDefinition',
  async (word, { rejectWithValue }) => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json()
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data)
    }
    return data[0]
  }
)

export interface FormState {
  query: string;
  definition: IDefinitionResponse | null;
  status: "idle" | "pending" | 'fulfilled' | "rejected";
  error: string;
}

const initialState: FormState = {
  query: "keyboard",
  definition: null,
  status: 'idle',
  error: ''
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setQuery: (state,action) => {
      state.query = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDefinition.pending, (state, action) => {
      state.status = 'pending'
      state.error = ''
    })
    builder.addCase(fetchDefinition.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.definition = action.payload
      state.error = ''
    })
    builder.addCase(fetchDefinition.rejected, (state, action) => {
      state.status = 'rejected'
      state.error = `Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.`
    })
  },
});

export default formSlice.reducer;
export const {
  setQuery,
} = formSlice.actions;

export const getQuery = (state:RootState) => state.form.query
export const getDefinition = (state:RootState) => state.form.definition
export const getFormError = (state: RootState) => state.form.error
export const getFormStatus = (state: RootState) => state.form.status
export const getAudioUrl = (state: RootState) => {
  const phoneticWithAudio = state.form.definition?.phonetics.filter((phonetic) => !!phonetic.audio)
  return phoneticWithAudio?.[0]?.audio;
}
