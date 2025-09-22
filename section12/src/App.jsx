import './App.css';
import { useReducer } from 'react';
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
        contents: "1번 일기 내용"
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId: 2,
        contents: "2번 일기 내용"
    }
]

function reducer(state, action) {
    return state;
}

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);

    return (
        <>
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
