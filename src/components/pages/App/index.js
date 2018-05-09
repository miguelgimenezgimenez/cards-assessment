import React, { Component } from 'react'
import { connect } from 'react-redux'
import sortBy from 'lodash.sortby'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

import * as cardActions from '../../../actions/card'
import CardModal from '../../organisms/CardModal'
import Card from '../../organisms/Card'
import Iterator from '../../../../utils/Iterator'
import style from './style.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 1
    }
  }

  handleChange (value) {
    this.setState({ value })
  }

  openModal () {
    cardActions.toggleModal(this.props.dispatch, true)
  }

  sort (cardList) {
    return this.state.value === 1 ? cardList : sortBy(cardList, card => card.title.toUpperCase())
  }

  render () {
    const { isModalOpen, cardList } = this.props
    return (
      <div >
        <div className={style.dropDown} >
        Sort By:
          <DropDownMenu value={this.state.value} onChange={(e, i, value) => this.handleChange(value)}>
            <MenuItem value={1} primaryText="Created At (Asc)" />
            <MenuItem value={3} primaryText="Title (Asc)" />
          </DropDownMenu>
        </div>
        <div className={style.cardContainer} >
          <Iterator
            iterable={this.sort(cardList)}
            component={card => <Card title={card.title} description={card.description} key={card.id} id={card.id} />}
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

        <CardModal open={isModalOpen} />

      </div >
    )
  }
}
const mapStateToProps = state => ({
  isModalOpen: state.card.isModalOpen,
  cardList: state.card.cardList
})

export default connect(mapStateToProps)(App)
