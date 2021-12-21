import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import ListItem from "./Components/List/List";

function App() {
  const [item, setItem] = useState([
    { name: "Html" },
    { name: "Css" },
    { name: "JavaScript" },
  ]);

  //Add New Course
  const AddNewCourse = (value, e) => {
    if (value.name.length !== 0) {
      setItem((PrevItem) => {
        return [...PrevItem, value];
      });
    } else {
      return alert("Please write with input");
    }
  };

  // Remove item for click
  const RemoveHandler = (index) => {
    setItem((PrevItem) => {
      return item.filter((el, idx) => idx !== index);
    });
  };

  return (
    <div className="App">
      <Form AddNewCourse={AddNewCourse} />
      <ListItem items={item} RemoveHandler={RemoveHandler} />
    </div>
  );
}

export default App;
