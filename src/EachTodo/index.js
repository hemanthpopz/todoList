import {Component} from 'react'
import {MdDelete} from 'react-icons/md'

import './index.css'

class EachTodo extends Component {
  render() {
    const {eachTodo, onClickDeleteBtn, onClickCheckbox} = this.props

    const {id, inputValue, isChecked, Status} = eachTodo

    console.log(Status)

    const headingClass = isChecked ? 'checked-heading' : 'todo-heading'

    const onClickDelete = () => {
      onClickDeleteBtn(id)
    }

    const onCheckBox = () => {
      onClickCheckbox(id)
    }

    return (
      <li>
        <div className="checkbox-container">
          <form>
            <input
              checked={isChecked}
              onClick={onCheckBox}
              className="checkbox"
              type="checkbox"
            />
          </form>
          <h1 className={headingClass}>{inputValue}</h1>
        </div>
        <button onClick={onClickDelete} className="delete-button">
          <MdDelete className="delete-icon" />
        </button>
      </li>
    )
  }
}

export default EachTodo
