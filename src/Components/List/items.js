import React, { Fragment, useState } from "react";
import styles from "./List.module.css";

// Update Course
export const Form = ({ SubmitHandler, Data }) => {
  const [value, setValue] = useState(Data.name);

  return (
    <form onSubmit={SubmitHandler} className={styles.update}>
      <input type="text" defaultValue={value} />
      <button type="submit">Update</button>
    </form>
  );
};

// Loop With Course
const Items = ({ Data, index, RemoveHandler, HandleState, SubmitHandler }) => {
  const [form, setForm] = useState(false);
  const List = (
    <ul>
      <li>
        <span>{Data.name}</span>
        <button
          type="submit"
          onClick={(e) => RemoveHandler(index)}
          className={styles.Remove}
        >
          Remove Course
        </button>
        <button
          type="submit"
          className={styles.Edit}
          onClick={(HandleState, () => setForm(!form))}
        >
          Edit Course
        </button>
      </li>
    </ul>
  );

  return <Fragment> {form ? <Form Data={Data} /> : List}</Fragment>;
};

export default Items;
