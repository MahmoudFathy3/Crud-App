import React, { Fragment, useState } from "react";
import styles from "./List.module.css";

// Update Course
export const Form = ({ Data, setForm, UpdateHandler, index }) => {
  const [Newvalue, setNewValue] = useState(Data.name);

  //Update Edite
  const SubmitHandler = (e) => {
    e.preventDefault();
    UpdateHandler(Newvalue, index);
    setForm(false);
  };

  return (
    <form onSubmit={SubmitHandler} className={styles.update}>
      <input
        type="text"
        value={Newvalue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

// Loop With Course
const Items = ({ Data, index, RemoveHandler, HandleState, UpdateHandler }) => {
  const [form, setForm] = useState(false);
  const List = (
    <ul>
      <li>
        <span>{Data.name}</span>
        <button
          type="submit"
          onClick={(e) => RemoveHandler(Data.id)}
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
  return (
    <Fragment>
      {form ? (
        <Form
          Data={Data}
          setForm={setForm}
          UpdateHandler={UpdateHandler}
          index={index}
        />
      ) : (
        List
      )}
    </Fragment>
  );
};

export default Items;
