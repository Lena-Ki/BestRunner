import { CREATE_SESSION, SORT_FIELD } from './types'
import _ from 'lodash'

const initialState = {
  sort: 'asc',
  sortField: 'date',
  sessions: [
    {id: '123', date: '24.08.2020', type: 'cycling', distance: '5.6', comment: 'in the city center'},
    {id: '1123', date: '20.08.2020', type: 'jogging', distance: '9.5', comment: '5 kkal burnt'},
    {id: '23', date: '18.08.2020', type: 'skiing', distance: '3.7', comment: 'freezing'},
    {id: '1', date: '29.08.2019', type: 'skiing', distance: '0.7', comment: 'freeze'},
    {id: '9978564', date: '05.12.2020', type: 'walking', distance: '10', comment: 'time travelling'}
  ]
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION:
      return { sessions: [...state.sessions, action.payload] }
    case SORT_FIELD:
      const cloneData = state.sessions.concat()
      const sortType = state.sort === 'asc' ? 'desc' : 'asc'
      const orderedData = _.orderBy(cloneData, action.payload, sortType)
      console.log(orderedData)
      return { sort: sortType, sessions: [...orderedData] }
    default: return state
  }
}