import './TodoPending.scss'

export default function TodoCounter({ TodoArray }){
    
  const pendingTodosCount = (TodoArray || []).filter((eachTodo) => eachTodo.complete == false).length

  if (!pendingTodosCount) return false;

  return(
    <div class="todo__pending">
      <p> {pendingTodosCount} tarefas pendentes </p>
    </div>
  );
}