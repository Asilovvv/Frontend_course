import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    
    const fetchData = async () => {
      const sampleData = [
        { id: 1, name: "Ferrari" },
        { id: 2, name: "Lamborghini" },
        { id: 3, name: "Porshe" },
        { id: 4, name: "Bugatti" },
        { id: 5, name: "Aston Martin" },
        { id: 6, name: "BMW" },
        { id: 7, name: "Audi" },
        { id: 8, name: "Masserati" },
        { id: 9, name: "Nissan" },
        { id: 10, name: "Cadillac" },
      ];
      setData(sampleData);
    };
    fetchData();
  }, []);

  return (
    <div>
    <h1>Data Filtering</h1>
    <input
      type="text"
      placeholder="Enter text to search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
  );
};

export default App;
