import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { createOpenSidebar, createCloseSidebar, openSidebar, closeSidebar } from './actions';
import TYPES from './types';

const initialState = false;

const middlewares = [thunk];
const mockStore = configureMockStore<boolean, ThunkDispatch<boolean, AnyAction>>(middlewares);
let store = mockStore(false);

beforeEach(() => {
  store.clearActions();
})

const expectedOpenActions = [
  {
    'type': TYPES.SET_SIDEBAR_OPEN
  }
];

const expectedCloseActions = [
  {
    'type': TYPES.SET_SIDEBAR_CLOSED
  }
];

describe('action creators', () => {
  it('creates TYPES.SET_SIDEBAR_OPEN', () => {
    store.dispatch(createOpenSidebar());
    expect(store.getActions()).toEqual(expectedOpenActions);
  })

  it('creates TYPES.CLOSED', () => {
    store.dispatch(createCloseSidebar());
    expect(store.getActions()).toEqual(expectedCloseActions);
  })
})

describe('async actions', () => {
  it('sets store to true', () => {
    store.dispatch(openSidebar());
    expect(store.getActions()).toEqual(expectedOpenActions);
  });

  it('sets store to true', () => {
    store.dispatch(closeSidebar());
    expect(store.getActions()).toEqual(expectedCloseActions);
  });
})
