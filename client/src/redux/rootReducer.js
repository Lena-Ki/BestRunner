import { CREATE_SESSION, EDIT_SESSION, DELETE_SESSION, SORT_FIELD, FILTER_FIELD } from './types'
import _ from 'lodash'

const initialState = {
  sort: 'asc',
  sortField: 'date',
  filter: 'all',
  sessions: [
    {id: '123', date: '2020.09.20', type: 'cycling', distance: 5.6, comment: 'in the city center'},
    {id: '1123', date: '2020.08.23', type: 'jogging', distance: 9.5, comment: '5 kkal burnt'},
    {id: '23', date: '2020.09.18', type: 'skiing', distance: 3.7, comment: 'freezing'},
    {id: '1', date: '2019.08.25', type: 'skiing', distance: 0.7, comment: 'freeze'},
    {id: '9978564', date: '2020.05.12', type: 'walking', distance: 10.0, comment: 'time travelling'}
  ]
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // create new session
    case CREATE_SESSION:
      return { ...state, sessions: [...state.sessions, action.payload]}

    // edit existing session
    case EDIT_SESSION:
      let newSessions = state.sessions.filter(item => {
        return item.id !== action.payload.id
      })
      return { ...state, sessions: [...newSessions, action.payload]}

    // delete selected session
    case DELETE_SESSION:
      return { ...state, sessions: state.sessions.filter(item => {
        return item.id !== action.payload
      })}

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