import styles from "./styles.module.css";

function B() {
  //   return <div className="title">B</div>;
//   return <div className={`${styles.title} ${styles.header}`}>B</div>;
  return <div className={`${styles.title} ${styles.header}`}>B</div>;
}

export default B;
