import { CREATE_SESSION, DELETE_SESSION, SORT_FIELD } from "./types";

export function createSession(session) {
  return {
    type: CREATE_SESSION,
    payload: session
  }
}

export function sortField(field) {
  return {
    type: SORT_FIELD,
    payload: field
  }
}

export function deleteSession(id) {
  return {
    type: DELETE_SESSION,
    payload: id
  }
}