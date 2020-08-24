import { CREATE_SESSION } from "./types"

const initialState = {
  sessions: [
    {id: '123', date: '24.08.2020', type: 'cycling', distance: '5.6', comment: 'in the city center'},
    {id: '1123', date: '20.08.2020', type: 'jogging', distance: '9.5', comment: '5 kkal burnt'},
    {id: '23', date: '18.08.2020', type: 'skiing', distance: '3.7', comment: 'freezing'}
  ]
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION:
      return { sessions: [...state.sessions, action.payload] }
    default: return state
  }
}