import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/atoms';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <ul id="listTask">
      {todoList.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
  
};

export default TodoList;