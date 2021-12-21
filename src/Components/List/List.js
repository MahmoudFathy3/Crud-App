import React, { useState } from "react";
import styles from "./List.module.css";
import { Form, List } from "./items";

const ListItem = ({ items, RemoveHandler }) => {
  const [edit, setEdit] = useState(false);

  const HandleState = () => {
    setEdit(true);
  };

  const Lists = items.length ? (
    items.map((item, index) => {
      return (
        <div key={index} className={styles.ListItem}>
          <List
            Data={item}
            index={index}
            RemoveHandler={RemoveHandler}
            HandleState={HandleState}
          />
        </div>
      );
    })
  ) : (
    <p style={{ color: "#FFF", fontSize: "25px" }}>There are no courses</p>
  );

  //Update Edite
  const SubmitHandler = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  const EditCourse = () => {
    return <Form SubmitHandler={SubmitHandler} />;
  };

  return <div className={styles.List}>{edit ? EditCourse() : Lists}</div>;
};
export default ListItem;
