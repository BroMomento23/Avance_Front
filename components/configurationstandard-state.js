import { useMemo } from "react";
import styles from "./configurationstandard-state.module.css";

const ConfigurationstandardState = ({
  iconCode,
  configurationstandardStatWidth,
  configurationstandardStatCursor,
  configurationstandardStatBorder,
  configurationstandardStatPadding,
  configurationstandardStatBackgroundColor,
  configurationstandardStatPosition,
  configurationstandardStatTop,
  configurationstandardStatRight,
}) => {
  const configurationstandardStateStyle = useMemo(() => {
    return {
      width: configurationstandardStatWidth,
      cursor: configurationstandardStatCursor,
      border: configurationstandardStatBorder,
      padding: configurationstandardStatPadding,
      backgroundColor: configurationstandardStatBackgroundColor,
      position: configurationstandardStatPosition,
      top: configurationstandardStatTop,
      right: configurationstandardStatRight,
    };
  }, [
    configurationstandardStatWidth,
    configurationstandardStatCursor,
    configurationstandardStatBorder,
    configurationstandardStatPadding,
    configurationstandardStatBackgroundColor,
    configurationstandardStatPosition,
    configurationstandardStatTop,
    configurationstandardStatRight,
  ]);

  return (
    <div
      className={styles.configurationstandardState}
      style={configurationstandardStateStyle}
    >
      <div className={styles.container}>
        <div className={styles.stateLayer}>
          <img className={styles.icon} alt="" src={iconCode} />
        </div>
      </div>
    </div>
  );
};

export default ConfigurationstandardState;
