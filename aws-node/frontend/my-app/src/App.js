import React, { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState();

  const add = (e) => {
    setImage(e.target.files[0]);
  };

  const submit = (e) => {
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post("/image", formData, {
        baseURL: 'http://localhost:3000',
        headers: { "Content-Type": "multipart/form-data", 
        'Access-Control-Allow-Origin': '*'},
      })
      .then((val) => {
        console.log('tes');
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <input type="file" onChange={add} />
      <button onClick={submit}>Submit</button>
      <img src={"https://demo5408.s3.ap-south-1.amazonaws.com/demo2?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWOK7KL2NKJ2HXZMV%2F20220202%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220202T203627Z&X-Amz-Expires=900&X-Amz-Signature=ad62e1484dc085454ac6183c20c298f621f1dfcffb07f7ba7ee137ed694ab5ee&X-Amz-SignedHeaders=host"}/>
    </>
  );
}

export default App;
