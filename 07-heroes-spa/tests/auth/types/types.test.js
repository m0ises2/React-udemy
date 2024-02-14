import { types } from "../../../src/auth/types/types";

describe('types tests', () => {
  test('types should be the listed ones', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    });
  });
});