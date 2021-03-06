import Nullstack from 'nullstack';

import EmptyTodolist from './EmptyTodo.njs';
import TodoPending from './TodoPending.njs';
import TodoForm from './TodoForm.njs';

import './styles/Todo.scss'
import './styles/popup.scss'
import './styles/checkbox.scss'

class TodoList extends Nullstack {

  prepare(context){
    context.TodoArray = []
  }

  hydrate({TodoArray}){
    // get todos in local storage
    const localStorageTodos = JSON.parse(localStorage.getItem('todosKey'))

    if (localStorageTodos != null) {
      // remove '_isProxy' atribute to user can set new values to todo
      localStorageTodos.forEach(todo => {
        delete todo._isProxy
      })

      // catch the Todos and set on the TodoArray context
      localStorageTodos.forEach(todo => TodoArray.push(todo))
      TodoArray = localStorageTodos

    } else {
      // if is first run of the aplication OR localStorage = null
      TodoArray.push(
        {
          id: 0,
          description: 'Comer pudim que está na geladeira faz 1 mês',
          complete: true,
          createdDate: '21/10/2015 13:52'
        },
        {
          id: 1,
          description: 'Deixar uma estrela nesse projeto no github 😉',
          complete: false,
          createdDate: '28/09/2021 23:46'
        },
        {
          id: 2,
          description: 'Deixar outra estrela no github do Nullstack 🌟',
          complete: false,
          createdDate: '28/01/2019 18:20'
      })  
    }
  }

  saveTodosInLocalStorage ({TodoArray}) {
    localStorage.setItem('todosKey', JSON.stringify(TodoArray))
  }

  handleDeleteTodo({TodoArray,data}){
    TodoArray.splice(data.todoId, 1);
    
    // update Todos id when one Todo is deleted
    for (let i = 0; i < TodoArray.length; i++){
      TodoArray[i].id = i
    }

    this.saveTodosInLocalStorage()
  }

  renderTodoItem({todoValue}){
    return (
      <li class={`todo__item ${todoValue.complete == true ? 'is-done' : ''}`}>
        <label class="b-contain todo__checkbox">
          <input type="checkbox"
            bind={todoValue.complete}
            onclick={this.saveTodosInLocalStorage}
          />
          <div class="b-input" />
        </label>

        <span class="todo__description">
          {todoValue.description}
        </span>
        <button type="button" class="todo__button button--delete"
          onclick={this.handleDeleteTodo}
          data-todo-id={todoValue.id}
          title="Remover tarefa"
        >
          <i class="fas fa-times" />
        </button>

        <span class="todo__date">
          <i class="fas fa-info-circle" />
          {todoValue.createdDate}
          <span class="todo__popup"> data de criação </span>
        </span>
      </li>
    )
  }
  
  render({TodoArray}) {
    
    return (
      <div class="todo__container">
        <ul class="todo__list">
          {!TodoArray.length ? 
            <EmptyTodolist />
            : 
            TodoArray.map(element => <TodoItem todoValue={element} /> )
          }
        </ul>
        <TodoForm />
        <TodoPending />
      </div>
    )
  }

}

export default TodoList;