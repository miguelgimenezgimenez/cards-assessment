import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import * as cardActions from '../../../actions/card'

class CardModal extends Component {
  createCard () {
    cardActions.setCardInfo(this.props.dispatch)
  }

  updateCurrentCard (event, field) {
    cardActions.updateCurrentCard(this.props.dispatch, event.target.value, field)
  }

  render () {
    const { currentCard, open } = this.props

    const actions = [<RaisedButton
      label="Cancelar"
      secondary
      style={{ width: 120 }}
      onClick={
        () => cardActions.toggleModal(this.props.dispatch, false)
      }
    />, <RaisedButton
      label={currentCard.id ? 'Guardar Cambios' : 'Añadir'}
      secondary
      style={{ marginLeft: 30, width: 120 }}
      onClick={() => this.createCard()}
    />
    ]
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
            onChange={e => this.updateCurrentCard(e, 'title')}
            floatingLabelText="Titulo"
          /> <br />

          <TextField
            onChange={e => this.updateCurrentCard(e, 'description')}
            floatingLabelText="Descripcion"
          /> <br />

          <TextField
            onChange={e => this.updateCurrentCard(e, 'imageUrl')}
            floatingLabelText="Imagen (Url)"
          /> <br />

        </Dialog>

      </div>
    )
  }
}
const mapStateToProps = state => ({
  isModalOpen: state.card.isModalOpen,
  currentCard: state.card.current

})

export default connect(mapStateToProps)(CardModal)
