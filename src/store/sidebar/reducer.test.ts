import reducer, { initialState } from './reducer';
import TYPES from './types';

describe('sidebar reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toBe(false);
  })

  it('should handle TYPES.SET_SIDEBAR_OPEN', () => {
    expect(
      reducer(initialState,
        {
          type: TYPES.SET_SIDEBAR_OPEN
        })
    ).toBe(true);
  })

  it('should handle TYPES.SET_SIDEBAR_CLOSED', () => {
    expect(
      reducer(true,
        {
          type: TYPES.SET_SIDEBAR_CLOSED
        })
    ).toBe(false);
  })

  it('should handle default', () => {
    expect(
      reducer(true,
        {
          type: 'UNDEFINED_TYPE'
        })
    ).toBe(true);
  })
})