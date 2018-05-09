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

test('it updates current card fields without overwriting existing values', () => {
  const store = mockStore(INITIAL_STATE)
  const expectedActions = [{ id: 1, type: 'DELETE_CARD' }]
  cardActions.deleteCard(store.dispatch, 1)
  expect(store.getActions()).toEqual(expectedActions)
})

test('it updates current card fields without overwriting existing values', () => {
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
