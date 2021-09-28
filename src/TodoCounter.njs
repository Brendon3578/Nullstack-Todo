export default function TodoCounter({ ToDoArray }){
    
  const pendentCount = (ToDoArray || []).filter((eachTodo) => eachTodo.complete == false).length

  if (!pendentCount) return false;

  return(
    <div class="todo__counter">
      <p> {pendentCount} tarefas pendentes </p>
    </div>
  );
}