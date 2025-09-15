import './App.css';

import {useRef, useReducer, createContext} from 'react';
import Header from './components/Header.jsx';
import Editor from './components/Editor.jsx';
import List from "./components/List.jsx";

const mockData = [
    {
        id: 0,
        isDone: false,
        content : "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content : "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content : "노래 연습하기",
        date: new Date().getTime(),
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) => item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
        case "DELETE":
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }

}

/*
* Context 생성은 보통은 컴포넌트 외부에 선언하게 됨.
* 렌더링할 때마다 컨텍스트 생성로직이 실행하게 하지 않게 하기 위해
*/
export const TodoContext = createContext();

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            }
        })
    };

    const onUpdate = (targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId,
        })
    };

    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId,
        })
    }

    return (
        <div className="App">
            <Header />
            <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
                <Editor />
                <List />
            </TodoContext.Provider>
        </div>
    );
}

export default App
