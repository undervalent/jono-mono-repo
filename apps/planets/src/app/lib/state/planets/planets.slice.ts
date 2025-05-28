import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import { ISubSection, IPlanet } from '../../types';
import planets from '../../data/data';
import { RootState } from '../store';

type PlanetsState = ReturnType<typeof planetsAdapter.getInitialState> & {
  selectedPlanet: string;
  selectedSection: ISubSection;
};

const planetsAdapter = createEntityAdapter<IPlanet>({
  selectId: (planet) => planet.name,
});

const initialState: PlanetsState = planetsAdapter.setAll(
  planetsAdapter.getInitialState({
    selectedPlanet: 'Earth',
    selectedSection: 'overview',
  }),
  planets as IPlanet[],
);

export const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setSelectedPlanet: (state, action: PayloadAction<string>) => {
      state.selectedPlanet = action.payload;
      state.selectedSection = 'overview'; // Reset section when changing planet
    },
    setSelectedSection: (
      state,
      action: PayloadAction<'overview' | 'structure' | 'geology'>,
    ) => {
      state.selectedSection = action.payload;
    },
  },
});

const selectors = planetsAdapter.getSelectors<RootState>(
  (state) => state.planets,
);

export const {
  selectAll: selectAllPlanets,
  selectById: selectPlanetByName,
  selectEntities: selectPlanetEntities,
  selectIds: selectPlanetNames,
} = selectors;

export const getSelectedPlanet = (state: RootState) =>
  state.planets.selectedPlanet;
export const getSelectedSection = (state: RootState) =>
  state.planets.selectedSection;
export const getSelectedPlanetData = (state: RootState) => {
  const selectedPlanet = selectPlanetByName(
    state,
    state.planets.selectedPlanet,
  );
  return selectedPlanet;
};

export const { setSelectedPlanet, setSelectedSection } = planetsSlice.actions;

export default planetsSlice.reducer;
