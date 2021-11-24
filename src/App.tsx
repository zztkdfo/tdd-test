import React, { ReactElement } from 'react'
import './App.css'
import GlobalStyle from './GlobalStyle'
import { TodoTemplate } from './components/TodoTemplate'
import { TodoHeader } from './components/TodoHeader'
import { TodoListContainer } from './container/TodoListContainer'
import { TodoInputContainer } from './container/TodoInputContainer'

function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader title={'Todo 리스트 (TDD)'} />
        <TodoInputContainer />
        <TodoListContainer />
      </TodoTemplate>
    </>
  )
}

export default App
