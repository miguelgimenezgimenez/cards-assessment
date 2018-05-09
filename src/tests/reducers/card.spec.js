import cardReducer from '../../reducers/card'

const INITIAL_STATE = {
  error: null,
  cardList: {},
  current: {
    title: '',
    description: '',
    imageUrl: '',
    id: '',
    createdAt: Date.now()
  },
  isModalOpen: false
}

test('it updates current card fields without overwriting existing values', () => {
  const action = {
    type: 'UPDATE_CURRENT_CARD',
    data: { title: 'Motocross' }
  }
  const updatedState = { ...INITIAL_STATE, current: { ...INITIAL_STATE.current, title: 'Motocross' } }
  expect(cardReducer(undefined, action)).toEqual(updatedState)
})
