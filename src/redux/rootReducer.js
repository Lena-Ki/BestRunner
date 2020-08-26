import { FETCH_SESSIONS, CREATE_SESSION, EDIT_SESSION, DELETE_SESSION, SORT_FIELD, FILTER_FIELD } from './types'
import _ from 'lodash'

const initialState = {
  sort: 'desc',
  sortField: 'date',
  filter: 'all',
  sessions: [
    {id: '2123471483', date: '2020.09.18', type: 'skiing', distance: 3.7, comment: 'freezing'},
    {id: '1123481741', date: '2020.08.23', type: 'jogging', distance: 9.5, comment: '5 kkal burnt'},
    {id: '1239921311', date: '2019.08.25', type: 'skiing', distance: 0.7, comment: 'freeze'},
    {id: '9978564124', date: '2020.05.12', type: 'walking', distance: 10.0, comment: 'time travelling'},
    {id: '1212421473', date: '2020.09.20', type: 'cycling', distance: 5.6, comment: 'in the city center'},
  ]
}

let newState

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch localStorage
    case FETCH_SESSIONS:
      let data = JSON.parse(localStorage.getItem('state')) || initialState
      return { ...data }

    // create new session
    case CREATE_SESSION:
      newState = [...state.sessions, action.payload]
      localStorage.setItem('state', JSON.stringify({...state, sessions: newState}))
      return { ...state, sessions: newState}

    // edit existing session
    case EDIT_SESSION:
      newState = state.sessions.filter(item => {
        return item.id !== action.payload.id
      })
      localStorage.setItem('state', JSON.stringify({...state, sessions: [...newState, action.payload]}))
      return { ...state, sessions: [...newState, action.payload]}

    // delete selected session
    case DELETE_SESSION:
      newState = state.sessions.filter(item => {
        return item.id !== action.payload
      })
      localStorage.setItem('state', JSON.stringify({...state, sessions: newState}))
      return { ...state, sessions: newState}

    // sort sessions by field types
    case SORT_FIELD:
      const cloneData = state.sessions.concat()
      const sortType = state.sort === 'asc' ? 'desc' : 'asc'
      
      let orderedData = {}
      if (action.payload === 'date') {
        orderedData = _.orderBy(cloneData, function(item) {
          return new Date(item.date)
        }, sortType);
      } else orderedData = _.orderBy(cloneData, action.payload, sortType)
      return { ...state, sort: sortType, sessions: [...orderedData], }

    // filter sessions by activity type
    case FILTER_FIELD:
      return { ...state, filter: action.payload }
    default: return state
  }
}