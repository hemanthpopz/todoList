import {Component} from 'react'

class OptionList extends Component {
  render() {
    const {eachItem} = this.props

    const {id, text} = eachItem
    return (
      <option value={id} className="options">
        {text}
      </option>
    )
  }
}

export default OptionList
