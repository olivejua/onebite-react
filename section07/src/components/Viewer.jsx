const Viewer = ({count}) => {
    return (
        <div>
            <div>
                <label>현재 카운트: </label>
            </div>
            <div>
                <h2>{count}</h2>
            </div>
        </div>
    )
}

export default Viewer;