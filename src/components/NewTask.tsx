import { useRef } from "react";

type NewTodoProps = {
    handleNewTask: (newTask: string) => void;
}

const NewTask= (props: NewTodoProps) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.handleNewTask(enteredText);
        textInputRef.current!.value = '';
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text"> Add a new Task: </label>
                <input type="text" id="todo-text" ref={textInputRef}></input>
            <button type="submit">Add Task</button>
            </div>
        </form>
    )
}


export default NewTask;