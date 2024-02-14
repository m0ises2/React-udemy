import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('authReducer tests', () => {
  test('should return the default state', () => {
    const action = {
      type: 'non-existant'
    };
    const defaultState = {
      prop1: 'value1',
      prop2: 'value2'
    };
    const returnedState = authReducer(defaultState, action);

    expect(returnedState).toEqual(defaultState);
  });

  test('should set the logged prop to true and set the user object with the payload', () => {
    const user = {
      id: 'ABC',
      name: 'Just a dude'
    };
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: 'Just a dude'
      }
    };
    const initialState = {};
    const returnedState = authReducer(initialState, action);

    expect(returnedState.logged).toBeTruthy();
    expect(returnedState.user).toEqual(user);
  });

  test('should set the logged prop to false and remove the user from the state', () => {
    const action = {
      type: types.logout
    };
    const state = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Just a dude'
      }
    };
    const returnedState = authReducer(state, action);

    expect(returnedState.logged).toBeFalsy();
    expect(returnedState.user).toBeUndefined();
  });
});