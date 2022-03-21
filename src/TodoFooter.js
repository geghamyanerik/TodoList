import  "./TodoFooter.css"

function TodoFooter({todos,onClearComponet}){

   const completedSize = todos.filter((todo)=> todo.isCompleted).length;
    
return(
    <div className="todoAppFooter">
        <span>{completedSize}/{todos.length} Լիստեր</span>
        <button            className="todoClearCompleted"  onClick={onClearComponet}>Մաքրել Նշվածները </button>
    </div>
)

}

export default TodoFooter;