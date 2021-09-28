import Nullstack from 'nullstack';

import EmptyTodolist from './EmptyTodolist.njs';
import TodoCounter from './TodoCounter.njs';
import TodoForm from './TodoForm.njs';

import './styles/Todo.scss'
import './styles/popup.scss'
import './styles/checkbox.scss'

class TodoList extends Nullstack {

  prepare(context){
    context.TodoArray = [{
      id: 0,
      description: 'Comer pudim que está na geladeira faz 1 mês',
      complete: true,
      createdDate: '08/08/2018 12:43'
    }, {
      id: 1,
      description: 'Viajar no tempo e evitar que esse projeto seja feito',
      complete: false,
      createdDate: '28/09/2021 18:43'
    }, {
      id: 2,
      description: 'Adicionar uma biblioteca pra guardar os Todos',
      complete: false,
      createdDate: '13/05/2012 08:43'
    }, {
      id: 3,
      description: 'Dar star nesse projeto no github. 😉',
      complete: false,
      createdDate: '28/09/2021 12:50'
    }
  ]
  }

  handleDeleteTodo({TodoArray,data}){
    TodoArray.splice(data.todoId, 1);
    
    // Update Todos id when one Todo is deleted
    let todoIdDeleted = data.todoId;

    for (let i = 0; i < TodoArray.length; i++){
      if (TodoArray[i].id >= todoIdDeleted){
        TodoArray[i].id = [i]
      }
    }
  }

  renderTodoItem({todoValue}){
    return (
      <li class={`todo__item ${todoValue.complete == true ? 'is-done' : ''}`}>
        <label class="b-contain todo__checkbox">
          <input type="checkbox"
            bind={todoValue.complete}
          />
          <div class="b-input" />
        </label>

        <span class="todo__description">
          {todoValue.description}
        </span>
        <button class="todo__button button--delete"
          onclick={this.handleDeleteTodo}
          data-todo-id={todoValue.id}
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
        <TodoCounter />
        <TodoForm />
      </div>
    )
  }

}

export default TodoList;