import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import style from './style.scss'
import * as cardActions from '../../../actions/card'

class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mouseOver: false
    }
  }

  editCard (id) {
    cardActions.updateCurrentCard(this.props.dispatch, id, 'id')
    cardActions.toggleModal(this.props.dispatch, true)
  }

  deleteCard (id) {
    cardActions.deleteCard(this.props.dispatch, id)
  }

  mouseOver (mouseOver) {
    this.setState({ mouseOver })
  }

  render () {
    const { card } = this.props
    return (
      <div
        className={style.card}
        onMouseEnter={() => this.mouseOver(true)}
        onMouseLeave={() => this.mouseOver(false)}

      >
        <div className={style.mediaContainer} style={{ backgroundImage: `url(${card.imageUrl})` }} >
          <div className={style.title} >
            {card.title}
          </div>
        </div>
        <div className={style.description} >
          {card.description}
        </div>
        {this.state.mouseOver &&
        <div >
          <FloatingActionButton
            onClick={() => this.deleteCard(card.id)}
            primary="true"
          >
            <ContentRemove />
          </FloatingActionButton>
          <FloatingActionButton
            onClick={() => this.editCard(card.id)}
            primary="true"
          >
            <ContentEdit />
          </FloatingActionButton>
        </div >
        }
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  card: state.card.cardList[ownProps.id]
})
export default connect(mapStateToProps)(Card)
