const express = require('express');
const app = express();
const PORT = 5000;

const students = [
  { id: 1, name: 'Alice Johnson', age: 20 },
  { id: 2, name: 'Bob Smith', age: 22 },
  { id: 3, name: 'Charlie Brown', age: 19 },
];

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Student Directory</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h1 { color: #333; }
      </style>
    </head>
    <body>
      <div id="root">Loading...</div>

      <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

      <script type="text/babel">
        const { useState, useEffect } = React;

        function App() {
          const [students, setStudents] = useState([]);

          useEffect(() => {
            fetch('/api/students')
              .then(res => res.json())
              .then(data => setStudents(data))
              .catch(err => console.error('Error fetching data:', err));
          }, []);

          return (
            <div>
              <h1>Student Directory</h1>
              {students.length === 0 ? (
                <p>Loading students...</p>
              ) : (
                <ul>
                  {students.map(student => (
                    <li key={student.id}>
                      {student.name} (Age: {student.age})
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }

        ReactDOM.render(<App />, document.getElementById('root'));
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
