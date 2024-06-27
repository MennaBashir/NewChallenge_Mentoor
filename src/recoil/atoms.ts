import { atom } from 'recoil';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
//setSelf=> is a function used to initialize the state
const localStorageEffect = (key: string) => ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
    }
    //onSet This function is called when the state change :
    /*_ => consider about oldValue but because 
           oldValue is not needed in the callback function, so we can use _ instead it
    */
    onSet((newValue: Todo[], _: any, isReset: boolean) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue));
    });
};

export const todoListState = atom<Todo[]>({
    key: 'todoListState',
    default: [],
    effects: [
        localStorageEffect('todo'),
    ]
});