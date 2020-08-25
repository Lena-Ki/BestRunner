import { CREATE_SESSION } from "./types";
import { SORT_FIELD } from "./types";

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