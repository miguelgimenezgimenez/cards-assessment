const uuidv4 = require('uuid/v4')

export const deleteCard = (dispatch, id) => {
  dispatch({ type: 'DELETE_CARD', id })
}

export const setCardInfo = (dispatch, cardId, cardInfo) => {
  const id = cardId || uuidv4()

  dispatch({
    type: 'SET_CARD_INFO',
    id,
    cardInfo: { ...cardInfo, createdAt: cardInfo.createdAt || Date.now(), id }
  })
}

export const toggleModal = (dispatch, isModalOpen) => {
  dispatch({ type: 'TOGGLE_MODAL', isModalOpen })
}

export const updateCurrentCard = (dispatch, value, field) => {
  const data = { [field]: value }
  dispatch({ type: 'UPDATE_CURRENT_CARD', data })
}
