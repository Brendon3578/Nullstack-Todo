import Nullstack from 'nullstack';

import createTodoDate from './utils/createTodoDate.njs';

class TodoForm extends Nullstack {
  description = ''

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
  }

  render() {
    return (
      <form onsubmit={this.handleSendTodo} class="todo__form">
        <button class="todo__button button--add">
          <i class="fas fa-plus"></i>
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