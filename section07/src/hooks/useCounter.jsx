import {useState} from "react";

function useCounter() {
    const [count, setCount] = useState(0);

    const onClick = (e) => {
        setCount(count + Number(e.target.value));
    }

    return [count, onClick];
}

export default useCounter;