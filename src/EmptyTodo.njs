import './EmptyTodo.scss'

export default function EmptyTodolist () {
  return (
    <div class="todo__empty">
      <span> Para começar, Que tal adicionar uma nova tarefa? 😉 </span>
      <img src="/nulla-scroll.png" alt="Que tal adicionar uma nova tarefa?" />
    </div>
  );
}