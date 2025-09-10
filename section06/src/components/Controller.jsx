const Controller = ({onClick}) => {
    return (
        <div>
            <button onClick={onClick} value="-1">-1</button>
            <button onClick={onClick} value="-10">-10</button>
            <button onClick={onClick} value="-100">-100</button>
            <button onClick={onClick} value="+100">+100</button>
            <button onClick={onClick} value="+10">+10</button>
            <button onClick={onClick} value="+1">+1</button>
        </div>
    )
}

export default Controller;