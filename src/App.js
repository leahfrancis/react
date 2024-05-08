import './App.css'
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input 
          type="text" 
          value={toDo}
          onChange={(e) => setToDo(e.target.value)} 
          placeholder="🖊️ Add item..." 
        />
        <i 
          onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} 
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        <h2>Completed Tasks</h2>
        {toDos.map((obj) => {
          if (obj.status) {
            return (
              <h2 key={obj.id}>{obj.text}</h2>
            )
          }
          return null
        })}
        <h2>Tasks</h2>
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input 
                onChange={(e) => {
                  const updatedToDos = toDos.map(todo => 
                    todo.id === obj.id ? { ...todo, status: e.target.checked } : todo
                  );
                  setToDos(updatedToDos);
                }}
                value={obj.status} 
                type="checkbox" 
                name="" 
                id="" 
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
