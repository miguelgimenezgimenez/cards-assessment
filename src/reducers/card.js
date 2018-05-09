const uuidv4 = require('uuid/v4')

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

const deleteCard = (state, id) => {
  const cardList = { ...state.cardList }
  delete cardList[id]
  localStorage.setItem('cardList', JSON.stringify(cardList))
  return { ...state, cardList }
}
const setError = (state, error) => ({ ...state, error, loading: false })

const setCardInfo = (state, cardId) => {
  const { title, description, imageUrl, createdAt } = state.current
  // let cardList = localStorage.getItem('cardList')
  // cardList = JSON.parse(cardList) || {}
  const { cardList } = state
  const id = cardId || uuidv4()
  cardList[id] = {
    title,
    description,
    imageUrl: imageUrl || './default.jpg',
    id,
    createdAt
  }

  localStorage.setItem('cardList', JSON.stringify(cardList))
  return { ...state, cardList, current: { title: '', description: '', imageUrl: '' }, isModalOpen: false }
}
const setCardList = (state, cardList) => ({ ...state, cardList })

const toggleModal = (state, isModalOpen) => ({ ...state, isModalOpen })

const updateCurrentCard = (state, data) => ({ ...state, current: { ...state.current, ...data } })

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CARDS_ERROR':
      return setError(state, action.error)

    case 'DELETE_CARD':
      return deleteCard(state, action.id)

    case 'SET_CARD_INFO':
      return setCardInfo(state, action.id)

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
