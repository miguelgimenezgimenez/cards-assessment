import React, { Component } from 'react'
import { connect } from 'react-redux'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import * as cardActions from '../../../actions/card'
import CardModal from '../../organisms/CardModal/index'

class App extends Component {
  componentDidMount () {
    cardActions.list(this.props.dispatch)
  }

  openModal () {
    cardActions.toggleModal(this.props.dispatch, true)
  }

  render () {
    const { isModalOpen } = this.props
    return (
      <div >
        <CardModal open={isModalOpen} />

        <FloatingActionButton
          onClick={() => this.openModal()}
          secondary
        >
          <ContentAdd />
        </FloatingActionButton>
      </div >
    )
  }
}
const mapStateToProps = state => ({
  isModalOpen: state.card.isModalOpen
})

export default connect(mapStateToProps)(App)
