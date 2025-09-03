const express = require('express');
const app = express();
app.use(express.json());
const PORT = 5000;

let students = [{ id: 1, name: 'Alice', age: 20 }];

app.get('/api/students', (req, res) => res.json(students));

app.post('/api/students', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) return res.status(400).json({ error: 'Name & age required' });
  students.push({ id: Date.now(), name, age: +age });
  res.status(201).json({ message: 'Added' });
});

app.delete('/api/students/:id', (req, res) => {
  students = students.filter(s => s.id !== +req.params.id);
  res.json({ message: 'Deleted' });
});

app.get('/', (req, res) => res.send(`
<html><body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script type="text/babel">
    const { useState, useEffect } = React;
    function App() {
      const [s, setS] = useState([]);
      const [n, setN] = useState('');
      const [a, setA] = useState('');
      useEffect(() => { fetch('/api/students').then(r => r.json()).then(setS); }, []);
      const add = () => {
        if (!n || !a) return alert('Enter name and age');
        fetch('/api/students', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({name:n,age:a}) })
          .then(() => fetch('/api/students').then(r=>r.json()).then(setS));
        setN(''); setA('');
      };
      const del = id => {
        fetch('/api/students/' + id, { method: 'DELETE' })
          .then(() => setS(s.filter(x => x.id !== id)));
      };
      return <div>
        <h1>Students</h1>
        <input placeholder="Name" value={n} onChange={e=>setN(e.target.value)} />
        <input placeholder="Age" type="number" value={a} onChange={e=>setA(e.target.value)} />
        <button onClick={add}>Add</button>
        <ul>{s.map(x => <li key={x.id}>{x.name} ({x.age}) <button onClick={() => del(x.id)}>X</button></li>)}</ul>
      </div>
    }
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body></html>
`));

app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));
