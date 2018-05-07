export const list = (dispatch, letter) => {
  let cardList = window.localStorage.getItem('cardList')
  cardList = JSON.parse(cardList) || {}
  dispatch({
    type: 'SET_CARD_LIST', cardList
  })
}

export const toggleModal = (dispatch, isModalOpen) => {
  dispatch({ type: 'TOGGLE_MODAL', isModalOpen })
}

export const updateCurrentCard = (dispatch, value, field) => {
  const data = { [field]: value }
  dispatch({ type: 'UPDATE_CURRENT_CARD', data })
}