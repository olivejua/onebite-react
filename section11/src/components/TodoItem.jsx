import "./TodoItem.css";
import {useContext} from "react";
import {TodoContext} from "../App.jsx";

const TodoItem = ({ id, isDone, content, date }) => {
    const { onUpdate, onDelete } = useContext(TodoContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input
                checked={isDone}
                onChange={onChangeCheckbox}
                type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
};

export default TodoItem;