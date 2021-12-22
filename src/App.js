import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";

function App() {
  const [item, setItem] = useState([
    { id: 1, name: "Html" },
    { id: 2, name: "Css" },
    { id: 3, name: "JavaScript" },
  ]);

  //Add New Course
  const AddNewCourse = (value, id) => {
    if (value.name.length !== 0) {
      setItem((PrevItem) => {
        return [...PrevItem, value];
      });
    } else {
      return alert("Please write with input");
    }
  };

  // Remove item for click
  const RemoveHandler = (id) => {
    setItem((PrevItem) => {
      return item.filter((el, idx) => el.id !== id);
    });
  };

  // Update item
  const UpdateHandler = (value, index) => {
    let items = item;
    let newItem = items[index];
    newItem["name"] = value;
    setItem([...items]);
  };

  return (
    <div className="App">
      <Form AddNewCourse={AddNewCourse} />
      <List
        items={item}
        RemoveHandler={RemoveHandler}
        UpdateHandler={UpdateHandler}
      />
    </div>
  );
}

export default App;
