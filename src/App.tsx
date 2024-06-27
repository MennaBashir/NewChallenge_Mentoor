import React, { useState } from 'react';
import "./App.css";
import { RecoilRoot } from 'recoil';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useTranslation } from 'react-i18next';
const App: React.FC = () => {

  const { t, i18n } = useTranslation();
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const direction = i18n.dir(i18n.language);
  const ChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActive1(!active1);
    setActive2(!active2)
  }
  return (
    <RecoilRoot>
      <div className="container" dir={direction}>
        <div className="btn">
          <button className={active1 ? "ar active" : "ar"} onClick={() => ChangeLanguage("ar")}>Ar</button>
          <button className={active2 ? "en active" : "en"} onClick={() => ChangeLanguage("en")}>En</button>
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
