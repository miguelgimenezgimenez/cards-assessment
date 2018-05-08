/* Debido a que el siguiente patron es muy utilizado en React he creado este
componente,en una aplicacion mas grande seria mas utila ya que probablemente lo
podriamos reutilizar */
import map from 'lodash.map'

const Iterator = (props) => {
  const list = map(props.iterable, (element, id) => props.component(element, id))
  return list
}

export default Iterator
