import * as types from "./actionTypes";

export function getAllUsersSuccess(users) {
  return { type: types.GET_ALL_USER, users };
}
