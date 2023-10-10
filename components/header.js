import { useMemo } from "react";
import FormContainer from "./form-container";
import styles from "./header.module.css";

const Header = ({
  headline,
  trailingIcon,
  containerCursor,
  containerBorder,
  containerPadding,
  containerBackgroundColor,
}) => {
  const trailingIconStyle = useMemo(() => {
    return {
      cursor: containerCursor,
      border: containerBorder,
      padding: containerPadding,
      backgroundColor: containerBackgroundColor,
    };
  }, [
    containerCursor,
    containerBorder,
    containerPadding,
    containerBackgroundColor,
  ]);

  return (
    <header className={styles.topAppBar}>
      <FormContainer />
      {!headline && (
        <h3 className={styles.headline}>Administración de bibliotecas</h3>
      )}
      {!trailingIcon && (
        <div className={styles.trailingIcon} style={trailingIconStyle}>
          <div className={styles.container}>
            <div className={styles.stateLayer}>
              <img
                className={styles.iconsaccountCircleFilled24}
                alt=""
                src="/iconsaccount-circle-filled-24px1.svg"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
