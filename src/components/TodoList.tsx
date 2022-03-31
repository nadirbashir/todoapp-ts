import React from 'react';
import { ItodoItem } from '../todo.model';

interface ITodoListProps {
    items: ItodoItem[],
}

const TodoList: React.FC<ITodoListProps> = ({items}) => {
    return (
        <ul>
            {items.map((item) => <li key={item.id}>{item.text}</li> )}
        </ul>
    )
}

export default TodoList;