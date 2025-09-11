import './App.css'
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import useCounter from "./hooks/useCounter.jsx";

function App() {
    const [count, onClick] = useCounter();

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <Viewer count={count} />
            </section>
            <section>
                <Controller onClick={onClick} />
            </section>
        </div>
    )
}

export default App;
