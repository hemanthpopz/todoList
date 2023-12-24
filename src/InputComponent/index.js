import {AiOutlinePlus} from 'react-icons/ai'

import {BiReset} from 'react-icons/bi'

import {Component} from 'react'

import './index.css'

class InputComponent extends Component {
  render() {
    const {
      onChangeAddInput,
      ToSetStateData,
      userInput,
      onClickResetBtn,
    } = this.props

    const onChangeInput = event => {
      onChangeAddInput(event.target.value)
    }

    const onClickBtn = event => {
      event.preventDefault()
      ToSetStateData()
    }

    const onClickReset = event => {
      event.preventDefault()
      onClickResetBtn()
    }

    return (
      <div className="input-container">
        <div className="heading-container">
          <h1 className="main-heading">YOUR TASK-LIST</h1>
        </div>
        <form className="add-todo-container">
          <input
            onChange={onChangeInput}
            placeholder="Enter a new task"
            type="text"
            id="user-input-form"
            value={userInput}
            className="user-input"
          />
          <button className="input-btn" onClick={onClickBtn}>
            <AiOutlinePlus className="plus-icon" /> Add
          </button>
          <button onClick={onClickReset} className="input-btn">
            <BiReset className="reset-icon" /> Reset
          </button>
        </form>
      </div>
    )
  }
}

export default InputComponent
import {AiOutlinePlus} from 'react-icons/ai'

import {BiReset} from 'react-icons/bi'

import {Component} from 'react'

import './index.css'

class InputComponent extends Component {
  render() {
    const {
      onChangeAddInput,
      ToSetStateData,
      userInput,
      onClickResetBtn,
    } = this.props

    const onChangeInput = event => {
      onChangeAddInput(event.target.value)
    }

    const onClickBtn = event => {
      event.preventDefault()
      ToSetStateData()
    }

    const onClickReset = event => {
      event.preventDefault()
      onClickResetBtn()
    }

    return (
      <div className="input-container">
        <div className="heading-container">
          <h1 className="main-heading">YOUR TASK-LIST</h1>
        </div>
        <form className="add-todo-container">
          <input
            onChange={onChangeInput}
            placeholder="Enter a new task"
            type="text"
            id="user-input-form"
            value={userInput}
            className="user-input"
          />
          <button className="input-btn" onClick={onClickBtn}>
            <AiOutlinePlus className="plus-icon" /> Add
          </button>
          <button onClick={onClickReset} className="input-btn">
            <BiReset className="reset-icon" /> Reset
          </button>
        </form>
      </div>
    )
  }
}

export default InputComponent
import {AiOutlinePlus} from 'react-icons/ai'

import {BiReset} from 'react-icons/bi'

import {Component} from 'react'

import './index.css'

class InputComponent extends Component {
  render() {
    const {
      onChangeAddInput,
      ToSetStateData,
      userInput,
      onClickResetBtn,
    } = this.props

    const onChangeInput = event => {
      onChangeAddInput(event.target.value)
    }

    const onClickBtn = event => {
      event.preventDefault()
      ToSetStateData()
    }

    const onClickReset = event => {
      event.preventDefault()
      onClickResetBtn()
    }

    return (
      <div className="input-container">
        <div className="heading-container">
          <h1 className="main-heading">YOUR TASK-LIST</h1>
        </div>
        <form className="add-todo-container">
          <input
            onChange={onChangeInput}
            placeholder="Enter a new task"
            type="text"
            id="user-input-form"
            value={userInput}
            className="user-input"
          />
          <button className="input-btn" onClick={onClickBtn}>
            <AiOutlinePlus className="plus-icon" /> Add
          </button>
          <button onClick={onClickReset} className="input-btn">
            <BiReset className="reset-icon" /> Reset
          </button>
        </form>
      </div>
    )
  }
}

export default InputComponent
import {AiOutlinePlus} from 'react-icons/ai'

import {BiReset} from 'react-icons/bi'

import {Component} from 'react'

import './index.css'

class InputComponent extends Component {
  render() {
    const {
      onChangeAddInput,
      ToSetStateData,
      userInput,
      onClickResetBtn,
    } = this.props

    const onChangeInput = event => {
      onChangeAddInput(event.target.value)
    }

    const onClickBtn = event => {
      event.preventDefault()
      ToSetStateData()
    }

    const onClickReset = event => {
      event.preventDefault()
      onClickResetBtn()
    }

    return (
      <div className="input-container">
        <div className="heading-container">
          <h1 className="main-heading">YOUR TASK-LIST</h1>
        </div>
        <form className="add-todo-container">
          <input
            onChange={onChangeInput}
            placeholder="Enter a new task"
            type="text"
            id="user-input-form"
            value={userInput}
            className="user-input"
          />
          <button className="input-btn" onClick={onClickBtn}>
            <AiOutlinePlus className="plus-icon" /> Add
          </button>
          <button onClick={onClickReset} className="input-btn">
            <BiReset className="reset-icon" /> Reset
          </button>
        </form>
      </div>
    )
  }
}

export default InputComponent
