import React, { Fragment, useState } from "react";
import styles from "./List.module.css";

const ListItem = ({ items, RemoveHandler }) => {
  const [edit, setEdit] = useState(false);

  const List = items.map((item, index) => {
    return (
      <div key={index} className={styles.ListItem}>
        <ul>
          <li>
            <span>{item.name}</span>
            <button
              type="submit"
              onClick={(e) => RemoveHandler(index)}
              className={styles.Remove}
            >
              Remove Course
            </button>
            <button
              type="submit"
              onClick={() => setEdit(true)}
              className={styles.Edit}
            >
              Edit Course
            </button>
          </li>
        </ul>
      </div>
    );
  });
  //Update edite
  const SubmitHandler = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  const EditCourse = () => {
    return (
      <form onSubmit={SubmitHandler} className={styles.update}>
        <input type="text" defaultValue={items.name} />
        <button type="submit">Update</button>
      </form>
    );
  };

  return <div className={styles.List}>{edit ? EditCourse() : List}</div>;
};
export default ListItem;
