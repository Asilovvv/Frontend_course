import React from 'react';

const myInfo = () => {
    const [messageVisible, setMessageVisible] = useState(false);
  
    const toggleMessage = () => {
      setMessageVisible(!messageVisible);
    };
  return (
    <div>
      <h1>Bektur Asilov</h1>
      <p>Position: Software Engineer</p>
      <p>Company: Apple</p>
      <p>Location: Bishkek, Kyrgyzstan</p>
      <p>Email: bekaasilov75@gmail.com</p>
      <p>Phone: +996755010210</p>

      <button onClick={toggleMessage}>Click me</button>

      {messageVisible && <p>Button was clicked!</p>}
    </div>
  );
};

export default myInfo;
