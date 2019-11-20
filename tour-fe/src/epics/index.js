import { combineEpics } from "redux-observable";
import { keysIn } from "lodash";
import * as postEpics from "./postEpics";
import * as authEpics from "./authEpics";

const combineEpicFunctions = epics => {
  return epics.reduce((arr, epic) => {
    return arr.concat(keysIn(epic).map(key => epic[key]));
  }, []);
};

const epics = combineEpicFunctions([
  authEpics,
  postEpics,
]);

export const rootEpic = combineEpics(...epics);
