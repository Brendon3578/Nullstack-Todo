import Nullstack from 'nullstack';

import createTodoDate from './utils/createTodoDate.njs';

class TodoForm extends Nullstack {
  description = ''

  saveTodosInLocalStorage ({TodoArray}) {
    const todoArrayStringfied = JSON.stringify(TodoArray)
    localStorage.setItem('todosKey', todoArrayStringfied)
  }

  handleSendTodo({TodoArray}){
    if (this.description == ''){ return false }
    else {
      TodoArray.push({
        id: TodoArray.length,
        description: this.description,
        complete: false,
        createdDate: createTodoDate()
      });
    }

    this.description = ''
    this.saveTodosInLocalStorage()
  }

  render() {
    return (
      <form onsubmit={this.handleSendTodo} class="todo__form">
        <button class="todo__button button--add">
          <i class="fas fa-plus" />
        </button>
        <input type="text"
          class="form__input"
          bind={this.description}
          placeholder="Escreva uma nova tarefa"
        />
      </form>
    )
  }
}

export default TodoForm;