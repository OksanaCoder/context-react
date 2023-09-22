import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Ciao.module.scss";

const Ciao = ({ name, lname, id }) => {
  const [isHi, setIsHi] = useState(true);

  const handleBtn = () => {
    setIsHi(!isHi);
  };

  return (
    <h2 className={styles.container}>
      <span>
        {isHi ? "hi" : "bye"}, {name} {lname} (id = {id})
      </span>
    </h2>
  );
};

export default Ciao;
