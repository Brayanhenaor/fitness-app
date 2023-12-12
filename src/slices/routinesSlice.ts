import { Routine } from './../domain/types/routines.d';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import routinesJsonMock from '../assets/routinesMock.json'

interface RoutinesState {
  routines: Routine[]
}

const getInitialState = (): Routine[] => {
  const savedRoutines = localStorage.getItem("routines");
  if (savedRoutines) {
    return JSON.parse(savedRoutines);
  } else {
    return routinesJsonMock.routines as Routine[];
  }
}

const initialState: RoutinesState = {
  routines: getInitialState()
}

export const routinesSlice = createSlice({
  name: 'routines',
  initialState,
  reducers: {
    addRoutine: (state, action: PayloadAction<Routine>) => {
      state.routines = [...state.routines, action.payload]
    },
    removeRoutine: (state, action: PayloadAction<string>) => {
      state.routines = state.routines.filter(routine => routine.id !== action.payload)
    },
    editRoutine: (state, action: PayloadAction<Routine>) => {
      state.routines = state.routines.filter(routine => routine.id !== action.payload.id)
      state.routines = [...state.routines, action.payload]
    }
  },
})

export const { addRoutine, removeRoutine, editRoutine } = routinesSlice.actions

export default routinesSlice.reducer