import {BsListStars} from 'react-icons/bs'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import InputComponent from '../InputComponent'

import SearchTodoInput from '../SearchTodoInput'

import EachTodo from '../EachTodo'

import './index.css'

class TodoList extends Component {
  state = {
    todoList: [],
    userInput: '',
    selectValue: '',
    searchValue: '',
  }

  onChangeAddInput = value => {
    this.setState({
      userInput: value,
    })
  }

  ToSetStateData = () => {
    const {userInput} = this.state
    if (userInput !== '') {
      const StateData = {
        id: uuidv4(),
        inputValue: userInput,
        isChecked: false,
        Status: 'ALL',
      }

      this.setState(Previous => ({
        todoList: [...Previous.todoList, StateData],
        userInput: '',
      }))
    }
  }

  onClickDeleteBtn = ID => {
    const {todoList} = this.state

    const deletedlist = todoList.filter(eachTodo => eachTodo.id !== ID)

    this.setState({
      todoList: deletedlist,
    })
  }

  onClickCheckbox = ID => {
    const {todoList} = this.state

    this.setState(
      Previous => ({
        todoList: Previous.todoList.map(each => {
          if (each.id === ID) {
            return {...each, isChecked: !each.isChecked}
          }
          return each
        }),
      }),
      this.toChangeCheckbox,
    )
  }

  toChangeCheckbox = () => {
    this.setState(Previous => ({
      todoList: Previous.todoList.map(each => {
        if (each.isChecked) {
          return {...each, Status: 'COMPLETED'}
        }

        return {...each, Status: 'INCOMPLETE'}
      }),
    }))
  }

  onChangeSelectInput = optionId => {
    this.setState({
      selectValue: optionId,
    })
  }

  onSearchTodo = searchValue => {
    this.setState({
      searchValue,
    })
  }

  onClickResetBtn = () => {
    this.setState({
      todoList: [],
      userInput: '',
    })
  }

  render() {
    const {todoList, userInput, selectValue, searchValue} = this.state

    const mainData = todoList.filter(eachTodo => {
      if (selectValue === 'ALL') {
        return (
          eachTodo.Status === 'COMPLETED' ||
          eachTodo.Status === 'INCOMPLETE' ||
          eachTodo
        )
      }
      if (selectValue === 'COMPLETED') {
        return eachTodo.Status === 'COMPLETED'
      }
      if (selectValue === 'INCOMPLETE') {
        return eachTodo.Status === 'INCOMPLETE'
      }
      return eachTodo
    })

    const includedData = mainData.filter(item =>
      item.inputValue.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="container">
        <nav>
          <div className="logo-container">
            <BsListStars className="logo" />
            <h1 className="text-logo">TODO-List</h1>
          </div>
        </nav>
        <div className="content-container">
          <InputComponent
            userInput={userInput}
            onClickResetBtn={this.onClickResetBtn}
            ToSetStateData={this.ToSetStateData}
            onChangeAddInput={this.onChangeAddInput}
          />
          <div className="todos-container">
            <SearchTodoInput
              onSearchTodo={this.onSearchTodo}
              onChangeSelectInput={this.onChangeSelectInput}
            />
            <ul>
              {includedData.map(eachTodo => (
                <EachTodo
                  onClickCheckbox={this.onClickCheckbox}
                  onClickDeleteBtn={this.onClickDeleteBtn}
                  eachTodo={eachTodo}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList
