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

const deleteCard = (state, id) => {
  const cardList = { ...state.cardList }
  delete cardList[id]
  return { ...state, cardList }
}
const setError = (state, error) => ({ ...state, error, loading: false })

const setCardInfo = (state, id, cardInfo) => ({
  ...state,
  cardList: {
    ...state.cardList,
    [id]: { ...cardInfo } },
  current: {
    id: '',
    title: '',
    createdAt: '',
    description: '',
    imageUrl: './default.jpg'
  },
  isModalOpen: false
})

const toggleModal = (state, isModalOpen) => ({ ...state, isModalOpen })

const updateCurrentCard = (state, data) => ({ ...state, current: { ...state.current, ...data } })

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* No estoy lanzando errores en ningun sitio por lo que esta accion nunca sera llamada */
    case 'CARDS_ERROR':
      return setError(state, action.error)

    case 'DELETE_CARD':
      return deleteCard(state, action.id)

    case 'SET_CARD_INFO':
      return setCardInfo(state, action.id, action.cardInfo)

    case 'TOGGLE_MODAL':
      return toggleModal(state, action.isModalOpen)

    case 'UPDATE_CURRENT_CARD':
      return updateCurrentCard(state, action.data)

    default:
      return state
  }
}
