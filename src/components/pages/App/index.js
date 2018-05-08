import React, { Component } from 'react'
import { connect } from 'react-redux'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import * as cardActions from '../../../actions/card'
import CardModal from '../../organisms/CardModal'
import Card from '../../organisms/Card'
import Iterator from '../../../../utils/Iterator'
import style from './style.scss'

class App extends Component {
  componentDidMount () {
    cardActions.list(this.props.dispatch)
  }

  openModal () {
    cardActions.toggleModal(this.props.dispatch, true)
  }

  render () {
    const { isModalOpen, cardList } = this.props
    return (
      <div >
        <CardModal open={isModalOpen} />

        <div className={style.cardContainer} >
          <Iterator
            iterable={cardList}
            component={(card, id) => <Card title={card.title} description={card.description} key={id} id={id} />}
          />
        </div>
        <FloatingActionButton
          className={
            style.addButton
          }
          onClick={
            () => this.openModal()
          }
          secondary
        >
          <ContentAdd />
        </FloatingActionButton>
      </div >
    )
  }
}
const mapStateToProps = state => ({
  isModalOpen: state.card.isModalOpen,
  cardList: state.card.cardList
})

export default connect(mapStateToProps)(App)
