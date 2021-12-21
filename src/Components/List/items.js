import React from "react";
import styles from "./List.module.css";

export const List = ({ Data, index, RemoveHandler, HandleState }) => {
  return (
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
        <button type="submit" className={styles.Edit} onClick={HandleState}>
          Edit Course
        </button>
      </li>
    </ul>
  );
};

export const Form = ({ SubmitHandler }) => {
  return (
    <form onSubmit={SubmitHandler} className={styles.update}>
      <input type="text" />
      <button type="submit">Update</button>
    </form>
  );
};

// const Items = ({ Data, index, RemoveHandler, HandleState, SubmitHandler }) => {
//   return (
//     <Fragment>
//       <List
//         Data={Data}
//         index={index}
//         RemoveHandler={RemoveHandler}
//         HandleState={HandleState}
//       />

//       <Form SubmitHandler={SubmitHandler} Data={Data} />
//     </Fragment>
//   );
// };

// export default Items;
