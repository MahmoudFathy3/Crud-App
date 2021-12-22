import React, { useState } from "react";
import styles from "./List.module.css";
import Items, { Form } from "./items";

const ListItem = ({ items, RemoveHandler, UpdateHandler }) => {
  const [edit, setEdit] = useState(false);

  console.log(items);
  console.log(items.length);

  const HandleState = () => {
    setEdit(true);
  };

  const Lists = items.length ? (
    items.map((item, index) => {
      return (
        <div key={index} className={styles.ListItem}>
          <Items
            Data={item}
            index={index}
            RemoveHandler={RemoveHandler}
            HandleState={HandleState}
            UpdateHandler={UpdateHandler}
          />
        </div>
      );
    })
  ) : (
    <p style={{ color: "#FFF", fontSize: "25px" }}>There are no courses</p>
  );

  const EditCourse = () => {
    return <Form />;
  };

  return <div className={styles.List}>{edit ? EditCourse() : Lists}</div>;
};
export default ListItem;
