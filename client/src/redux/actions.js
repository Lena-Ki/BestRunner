import { CREATE_SESSION } from "./types";

export function createSession(session) {
  return {
    type: CREATE_SESSION,
    payload: session
  }
}