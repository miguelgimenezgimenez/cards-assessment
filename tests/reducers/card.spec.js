import cardReducer from '../../src/reducers/card'

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
  const action = {
    type: 'UPDATE_CURRENT_CARD',
    data: { title: 'Motocross' }
  }
  const updatedState = { ...INITIAL_STATE, current: { ...INITIAL_STATE.current, title: 'Motocross' } }
  expect(cardReducer(undefined, action)).toEqual(updatedState)
})

test('it deletes the selected card', () => {
  const initialState = {
    ...INITIAL_STATE,
    cardList: {
      1:
        { title: 'Motocross' },
      2:
        { title: 'SnowBoard' },
      3:
        { title: 'KiteBoard' },
      4:
        { title: 'Surf' }
    }
  }

  const action = {
    type: 'DELETE_CARD',
    id: 3
  }
  const updatedState = {
    ...INITIAL_STATE,
    cardList: {
      1: {
        title: 'Motocross'
      },
      2: {
        title: 'SnowBoard'
      },
      4: {
        title: 'Surf'
      }
    }
  }
  expect(cardReducer(initialState, action)).toEqual(updatedState)
})

test('it creates a new card with correct info', () => {
  const initialState = {
    ...INITIAL_STATE,
    cardList: {
      1:
        {
          title: 'Motocross'
        }
    }
  }

  const action = {
    type: 'SET_CARD_INFO',
    cardInfo: { title: 'Snowboard' },
    id: 2
  }
  const updatedState = {
    ...INITIAL_STATE,
    cardList: {
      1: {
        title: 'Motocross'
      },
      2: {
        title: 'Snowboard'
      }
    }
  }
  expect(cardReducer(initialState, action)).toEqual(updatedState)
})

test('it toggles modal state', () => {
  const updatedState = { ...INITIAL_STATE, isModalOpen: true }
  const action = {
    type: 'TOGGLE_MODAL',
    isModalOpen: true
  }
  expect(cardReducer(INITIAL_STATE, action)).toEqual(updatedState)
})
