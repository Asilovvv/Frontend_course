import React, { useState } from 'react';
import './MyInfo.css';

const MyInfo = () => {
  const [messageVisible, setMessageVisible] = useState(false);
  const [position, setPosition] = useState('Junior Software Engineer & Junior Frontend Developer');

  const toggleMessage = () => {
    setMessageVisible(!messageVisible);
  };

  const promotePosition = () => {
    setPosition('Senior Software Engineer & Senior Frontend Developer');
  };

  return (
    <div className="my-info">
      <h1>Bektur Asilov</h1>
      <p><strong>Position:</strong> {position}</p>
      <p><strong>Company:</strong> Apple</p>
      <p><strong>Experinece:</strong> 2-year</p>
      <p><strong>Location:</strong> Bishkek, Kyrgyzstan</p>
      <p><strong>Email:</strong> bekaasilov75@gmail.com</p>
      <p><strong>Phone:</strong> +996755010210</p>

      <button className="btn" onClick={promotePosition}>Promote</button>

      {messageVisible && <p className="message">Button was clicked!</p>}
    </div>
  );
};

export default MyInfo;
