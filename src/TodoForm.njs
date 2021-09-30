import Nullstack from 'nullstack';

import './TodoForm.scss'

import createTodoDate from './utils/createTodoDate.njs';

class TodoForm extends Nullstack {
  description = ''

  handleSendNewTodo({TodoArray}){
    if (this.description.trim() == ''){ return false }
    
    else {
      TodoArray.push({
        id: TodoArray.length,
        description: this.description,
        complete: false,
        createdDate: createTodoDate()
      });
    }

    this.description = ''

    localStorage.setItem('todosKey', JSON.stringify(TodoArray))
  }

  render() {
    return (
      <form onsubmit={this.handleSendNewTodo}
        class="todo__form"
        autocomplete="off"
      >
        <button type="button" class="todo__button button--add" title="Adicionar nova tarefa">
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