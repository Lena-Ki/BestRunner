import { CREATE_SESSION, DELETE_SESSION, SORT_FIELD, FILTER_FIELD } from "./types";

export function createSession(session) {
  return {
    type: CREATE_SESSION,
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