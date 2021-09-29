export default function TodoCounter({ TodoArray }){
    
  const pendingTodosCount = (TodoArray || []).filter((eachTodo) => eachTodo.complete == false).length

  if (!pendingTodosCount) return false;

  return(
    <div class="todo__counter">
      <p> {pendingTodosCount} tarefas pendentes </p>
    </div>
  );
}