
const INITIAL_STATE = {
  error: null,
  list: {},
  loading: false
}
const setError = (state, error) => ({ ...state, error, loading: false })

const setLoading = (state, loading) => ({ ...state, loading })

const setCardsList = (state, data) => {
  const { cardsList, type } = data
  const list = { ...state.list }
  if (!list[type]) list[type] = cardsList
  else list[type] = list[type].concat(cardsList)
  return { ...state, list, loading: false }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CARDS_LOADING':
      return setLoading(state, true)
    case 'CARDS_LIST_SUCCESS':
      return setCARDSList(state, action.data)
    case 'CARDS_LIST_ERROR':
      return setError(state, action.error)
    default:
      return state
  }
}
