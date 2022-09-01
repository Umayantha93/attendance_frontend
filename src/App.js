
import  Axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [filedata, setFiledata] = useState('');

  const handleChange = file => {
    setFiledata(file[0]);
  }

  const submitData = e => {
    e.preventDefault();
    const fData = new FormData();

    fData.append('file', filedata);

    Axios.post("http://127.0.0.1:8000/api/post-file", fData)
    .then((res) => {
      console.log("response", res);
    })
    .catch((e) => {
      console.error("failed", e);
    });
  }
  return (
    <div className="App">
      <form onSubmit={submitData}>

        <input name='file' id='file' type='file' onChange={(e) => handleChange(e.target.file)}/>
        <button type='submit' onClick={submitData}>Upload</button>
        </form>
    </div>
  );
}

export default App;
