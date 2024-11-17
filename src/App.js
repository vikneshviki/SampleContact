import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./component/Form";
import ContactList from "./component/ContactList";
import axios from "axios";
import { getAllUser } from "./utils/ApiUrl";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get(getAllUser).then((res) => {
      setUserData(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  return (
    <>
      <Form />
      <ContactList list={userData} />
    </>
  );
}

export default App;
