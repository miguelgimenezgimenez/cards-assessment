const uuid = require('uuid')

const INITIAL_STATE = {
  error: null,
  cardList: {},
  current: {
    title: '',
    description: '',
    imageUrl: ''
  },
  isModalOpen: false
}

const setError = (state, error) => ({ ...state, error, loading: false })

const createCard = (state, data) => {
  const { title, description, imageUrl } = data
  const cardList = JSON.parse(window.localStorage.getItem('cardList') || {})
  const id = uuid.v4
  cardList[id] = {
    title,
    description,
    imageUrl
  }
  window.localStorage.setItem('cardList', JSON.stringify(cardList))
  return { ...state, cardList, current: { title: '', description: '', imageUrl: '' } }
}
const setCardList = (state, cardList) => ({ ...state, cardList })

const toggleModal = (state, isModalOpen) => ({ ...state, isModalOpen })

const updateCurrentCard = (state, data) => ({ ...state, current: { ...state.current, ...data } })

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CARDS_LIST_ERROR':
      return setError(state, action.error)
    case 'CREATE_CARD':
      return createCard(state, action.data)
    case 'TOGGLE_MODAL':
      return toggleModal(state, action.isModalOpen)
    case 'SET_CARD_LIST':
      return setCardList(state, action.cardList)
    case 'UPDATE_CURRENT_CARD':
      return updateCurrentCard(state, action.data)
    default:
      return state
  }
}
