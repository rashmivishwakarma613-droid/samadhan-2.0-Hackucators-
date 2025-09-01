import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: task
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', textAlign: 'center' }}>
      <h1>📝 To-Do List</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Kya karna hai?"
          style={{ padding: '10px', fontSize: '16px', width: '60%' }}
        />
        <button onClick={handleAddTask} style={{ padding: '10px 20px' }}>
          ➕ Add
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((t) => (
          <li
            key={t.id}
            style={{
              background: '#eee',
              margin: '5px 0',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {t.text}
            <button
              onClick={() => handleDeleteTask(t.id)}
              style={{ background: 'red', color: 'white', border: 'none', padding: '5px' }}
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
