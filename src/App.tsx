import React, { useState, useEffect } from 'react';
import "./App.css";
import { RecoilRoot } from 'recoil';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useTranslation } from 'react-i18next';
const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [active1, setActive1] = useState<string>('');
  const direction = i18n.dir(i18n.language);
  const ChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActive1(event.target.value);
  }
  useEffect(() => {
    i18n.changeLanguage(active1);
  }
    , [active1])
  return (
    <RecoilRoot>
      <div className="container" dir={direction}>
        <div className="checklang">
            <select name="lang" value={active1} onChange={ChangeLanguage}>
              <option value="en" >EN</option>
              <option value="ar">AR</option>
            </select>
        </div>
        <div className="txt">
          <h2>{t('Key_1')}</h2>
          <TodoInput />
        </div>
        <TodoList />
      </div>
    </RecoilRoot>
  );
};
export default App;
