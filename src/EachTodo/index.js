import {Component} from 'react'
import {MdDelete} from 'react-icons/md'
import {FaEdit} from 'react-icons/fa'
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

    const onClickEdit = () => {
      console.log(inputValue)
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
        <div className="each-button-container">
          <button
            aria-label="Mute volume"
            onClick={onClickDelete}
            className="delete-button"
          >
            <MdDelete className="delete-icon" />
          </button>
          <button
            onClick={onClickEdit}
            className="edit-btn"
            aria-label="Mute volume"
          >
            <FaEdit className="edit-icon" />
          </button>
        </div>
      </li>
    )
  }
}

export default EachTodo
