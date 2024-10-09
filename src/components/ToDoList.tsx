import React from 'react';

interface ToDoListProps {
    items: { id: string, text: string }[];
}

const ToDoList: React.FC<ToDoListProps> = ({ items }) => {
    return (
        <div>
            <ul id='task'>
                {items.map(todo => <li key={todo.id}>{todo.text}<input type="checkbox" key={todo.id}/></li>)}
            </ul>
        </div>
    );
}

export default ToDoList;