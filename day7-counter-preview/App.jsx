import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);         // counter ke liye
  const [text, setText] = useState('');          // input text ke liye

  return (
    <div style={{
      maxWidth: 400,
      margin: '2rem auto',
      padding: 20,
      border: '1px solid #ccc',
      borderRadius: 10,
      fontFamily: 'Arial'
    }}>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: '8px 16px', marginBottom: 20 }}
      >
        Increment
      </button>

      <hr />

      <div>
        <label htmlFor="textInput">Enter text:</label><br />
        <input
          id="textInput"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          style={{ padding: 8, width: '100%', marginTop: 8 }}
        />
        <p style={{ marginTop: 10 }}><strong>Live Preview:</strong> {text}</p>
      </div>
    </div>
  );
}
