import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import * as cardActions from '../../../actions/card'

class CardModal extends Component {
  updateCurrentCard (event, field) {
    cardActions.updateCurrentCard(this.props.dispatch, event.target.value, field)
  }

  render () {
    const actions = [<FlatButton
      label="Cancel"
      primary
      onClick={
        () => cardActions.toggleModal(this.props.dispatch, false)
      }
    />
    ]
    const { open } = this.props
    return (
      <div>
        <Dialog
          title="Nueva Tarjeta"
          actions={actions}
          onRequestClose={
            () => cardActions.toggleModal(this.props.dispatch, false)
          }
          open={open}
        >
          <TextField
            onChange={e => this.updateCurrentCard(e, 'Title')}
            floatingLabelText="Titulo"
          /> <br />

          <TextField
            onChange={e => this.updateCurrentCard(e, 'Description')}
            floatingLabelText="Descripcion"
          /> <br />

        </Dialog>

      </div>
    )
  }
}
const mapStateToProps = state => ({
  isModalOpen: state.card.isModalOpen
})

export default connect(mapStateToProps)(CardModal)
