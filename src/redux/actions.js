import { FETCH_SESSIONS, CREATE_SESSION, EDIT_SESSION, DELETE_SESSION, SORT_FIELD, FILTER_FIELD } from "./types";

export function fetchSessions() {
  return {
    type: FETCH_SESSIONS,
  }
}

export function createSession(session) {
  return {
    type: CREATE_SESSION,
    payload: session
  }
}

export function editSession(session) {
  return {
    type: EDIT_SESSION,
    payload: session
  }
}

export function deleteSession(id) {
  return {
    type: DELETE_SESSION,
    payload: id
  }
}

export function sortField(field) {
  return {
    type: SORT_FIELD,
    payload: field
  }
}

export function filterField(field) {
  return {
    type: FILTER_FIELD,
    payload: field
  }
}