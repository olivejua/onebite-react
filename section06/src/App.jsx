import './App.css'
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import useCounter from "./hooks/useCounter.jsx";

function App() {
    const [count, onClick] = useCounter();

    return (
        <>
            <h1>Simple Counter</h1>
            <Viewer count={count} />
            <Controller onClick={onClick} />
        </>
    )
}

export default App
