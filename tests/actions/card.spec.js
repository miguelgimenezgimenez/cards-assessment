import configureMockStore from 'redux-mock-store'
import * as cardActions from '../../src/actions/card'

const mockStore = configureMockStore()

const INITIAL_STATE = {
  error: null,
  cardList: {},
  current: {
    title: '',
    description: '',
    imageUrl: './default.jpg',
    id: '',
    createdAt: ''
  },
  isModalOpen: false
}

test('it dispatches DELETE_CARD', () => {
  const store = mockStore(INITIAL_STATE)
  const expectedActions = [{ id: 1, type: 'DELETE_CARD' }]
  cardActions.deleteCard(store.dispatch, 1)
  expect(store.getActions()).toEqual(expectedActions)
})

test('it dispatches SET_CARD_INFO with correct arguments', () => {
  const store = mockStore(INITIAL_STATE)
  const cardInfo = { description: 'Extreme Sport', title: 'Motocross' }
  const expectedActions = [{
    id: 1,
    type: 'SET_CARD_INFO',
    cardInfo: { ...cardInfo,
      createdAt: Date.now(),
      id: 1 }
  }]
  cardActions.setCardInfo(store.dispatch, 1, cardInfo)
  expect(store.getActions()).toEqual(expectedActions)
})

test('it dispatches TOGGLE_MODAL ', () => {
  const store = mockStore(INITIAL_STATE)

  const expectedActions = [{
    type: 'TOGGLE_MODAL',
    isModalOpen: true
  }]
  cardActions.toggleModal(store.dispatch, true)
  expect(store.getActions()).toEqual(expectedActions)
})
