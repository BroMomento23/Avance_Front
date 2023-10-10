import styles from "./form-container.module.css";

const FormContainer = () => {
  return (
    <div className={styles.leadingIcon}>
      <div className={styles.container}>
        <div className={styles.stateLayer}>
          <button className={styles.iconsmenu24px}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
