import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';
import { useTranslation } from 'react-i18next';

let id = 0;
function getId() {
    return id++;
}
const TodoInput: React.FC = () => {
    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useRecoilState(todoListState);


    const addItem = () => {
        if (inputValue.trim() !== "") {
            setTodoList([...todoList, { id: getId(), text: inputValue, completed: false }]);
            setInputValue('');
        }
    };


    return (
        <div>
            <textarea
                placeholder={t('Key_3')}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}></textarea>
            <button onClick={addItem}>{t('Key_2')}</button>
        </div>
    );
};

export default TodoInput;