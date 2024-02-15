import { useRef, useState } from "react";
import "./App.css";
import "./index.css";

function App() {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();
    const Add = () => {
        const text = inputRef.current.value;
        const newItem = text;
        setTodos([...todos, newItem]);
        inputRef.current.value = "";
    };

    const Done = (index) => {
        document.querySelectorAll(".item")[index].classList.toggle("checked");
    }

    return (
        <div className="App">
            <div className="todo-list">
                <h2>Todo List</h2>
                <div className="form">
                    <input className="inputText" ref={inputRef} placeholder="Todo Item" />
                    <button className="inputSubmit" onClick={Add}>Add</button>
                </div>
                <ul>
                    {todos.map((text , index) => {
                        return (
                            <li className="list">
                                <input type="checkbox" onChange={() => Done(index)}/>
                                <li className="item">{text}</li>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;