import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Todo, todoListState } from '../recoil/atoms';
import { useTranslation } from 'react-i18next';

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const { t } = useTranslation();

    const toggleComplete = () => {
        const newTodoList = todoList.map(ele =>
            ele.id === todo.id ? { ...ele, completed: !ele.completed } : ele
        );
        setTodoList(newTodoList);
    };

    const deleteTodo = () => {
        const newTodoList = todoList.filter(ele => ele.id !== todo.id);
        setTodoList(newTodoList);
    };

    const toggleEdit = () => {
        setEdit(!edit);
        setEditText(todo.text);
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditText(e.target.value);
    };

    const saveEdit = () => {
        const newTodoList = todoList.map(ele =>
            ele.id === todo.id ? { ...ele, text: editText } : ele
        );
        setTodoList(newTodoList);
        setEdit(false);
    };


    return (

        <div className="task">
            {edit ? (
                <div className="editItem">
                    <div>
                        <input type="text" value={editText} onChange={handleEditChange} />
                    </div>
                    <div>
                        <button onClick={saveEdit}>{t('Key_4')}</button>
                        <button onClick={toggleEdit}>{t('Key_5')}</button>
                    </div>
                </div>
            ) : (

                    <div className="newItem">
                        <div>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={toggleComplete}
                            />
                            <span >{todo.text}</span>
                        </div>
                        <div>
                            <button onClick={toggleEdit}>{t('Key_6')}</button>
                            <button onClick={deleteTodo}>{t('Key_7')}</button>
                        </div>
                    </div>
                )}
        </div>

    );
};
export default TodoItem;