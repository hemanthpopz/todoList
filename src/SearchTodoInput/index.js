import {Component} from 'react'
import {BsFillFilterCircleFill} from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'
import OptionsList from '../OptionsList'
import './index.css'

const selectOptions = [
  {
    text: 'All',
    id: 'ALL',
  },
  {
    text: 'Completed',
    id: 'COMPLETED',
  },
  {
    text: 'Incomplete',
    id: 'INCOMPLETE',
  },
]

class SearchTodoInput extends Component {
  render() {
    const {onChangeSelectInput, onSearchTodo} = this.props

    const onChangeSelect = event => {
      onChangeSelectInput(event.target.value)
    }

    const onChangeSearch = event => {
      event.preventDefault()
      onSearchTodo(event.target.value)
    }
    return (
      <div className="search-container">
        <form className="search-todo-form">
          <input
            onChange={onChangeSearch}
            placeholder="Search Your Task"
            className="search-input"
            type="text"
          />

          <FaSearch className="search-icon" />
        </form>

        <select onChange={onChangeSelect}>
          {selectOptions.map(eachItem => (
            <OptionsList eachItem={eachItem} />
          ))}
        </select>
      </div>
    )
  }
}

export default SearchTodoInput
