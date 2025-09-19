import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setname] = useState("");
  const [rollno, setrollno] = useState("");
  const [showReport, setshowReport] = useState(false);

  // Dummy OBJ Data
  const studentData = {
    name: "Anas Iqbal",
    rollno: "87",
    subjects: {
      Math: 85,
      English: 78,
      Science: 92,
      History: 74,
      Art: 88
    }
  };

  const totalmarksarr = Object.values(studentData.subjects);
  const totalmarks = totalmarksarr.reduce((a, b) => a + b, 0);
  const perage = ((totalmarks / (totalmarksarr.length * 100)) * 100).toFixed(1);
  const grade =
    perage >= 80 ? "A+" :
    perage >= 70 ? "A" :
    perage >= 60 ? "B" :
    perage >= 50 ? "C" : "F";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === studentData.name && rollno === studentData.rollno) {
      setshowReport(true);
    } else {
      alert("Invalid Credentials");
      setshowReport(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Report Card Generator</h1>
      {!showReport ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Enter your name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label>Enter your roll no: </label>
            <input
              type="text"
              value={rollno}
              onChange={(e) => setrollno(e.target.value)}
              required
            />
          </div>
          <br />
          <button type="submit">Get Report</button>
        </form>
      ) : (
        // Displaying report card
        <div>
          <h2>Report Card</h2>
          <p><strong>Name:</strong> {studentData.name}</p>
          <p><strong>Roll No:</strong> {studentData.rollno}</p>
          <h3>Subjects and Marks:</h3>
          <ul>
            {Object.entries(studentData.subjects).map(([subject, mark]) => (
              <li key={subject}>
                {subject}: {mark}
              </li>
            ))}
          </ul>
          <p><strong>Total Marks:</strong> {totalmarks}</p>
          <p><strong>Percentage:</strong> {perage}%</p>
          <p><strong>Grade:</strong> {grade}</p>
          <button onClick={() => setshowReport(false)}>Go Back</button>
        </div>
      )}
    </div>
  );
}

export default App;