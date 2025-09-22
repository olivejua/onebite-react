import './App.css';
import {useReducer, useRef} from 'react';
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound"

const mockData = [
    {
        id: 1,
        createdDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용"
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용"
    }
]

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) =>
                String(item.id) === String(action.data.id)
                    ? action.data
                    : item
            );
        case "DELETE":
            return state.filter((item) => String(item.id) !== String(action.id));
    }
}

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id : idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        })
    };

    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdDate,
                emotionId,
                content,
            }
        });
    };

    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id
        })
    }

    return (
        <>
            <button
                onClick={() =>
                    onCreate(new Date().getTime(), 1, "Hello")}>
                일기 추가 테스트
            </button>

            <button
                onClick={() => onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다")}>
                일기 수정 테스트
            </button>

            <button
                onClick={() => onDelete(1)}>
                일기 삭제 테스트
            </button>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/new" element={<New />} />
                <Route exact path="/diary/:id" element={<Diary />} />
                <Route exact path="/edit/:id" element={<Edit />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App
