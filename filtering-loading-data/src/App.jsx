import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]); // Original data list
  const [searchTerm, setSearchTerm] = useState(""); // Search string

  return (
    <div>
      <h1>Data Filtering</h1>
    </div>
  );
};

export default App;
