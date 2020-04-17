import React from "react";

import { GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "../actions/types";

const initialState = {
  projects: [],
  project: {},
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
      break;
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
      break;

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.projectIdentifier !== action.payload
        ),
      };
      break;

    default:
      return state;
      break;
  }
}
