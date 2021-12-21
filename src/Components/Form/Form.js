import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ AddNewCourse }) => {
  const [value, setValue] = useState({
    name: "",
  });

  const ChangHandle = (e) => {
    setValue({
      name: e.target.value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    AddNewCourse(value);
    setValue({
      name: "",
    });
  };

  return (
    <div className={styles.Form}>
      <form onSubmit={SubmitHandler}>
        <input type="text" value={value.name} onChange={ChangHandle} />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default Form;
