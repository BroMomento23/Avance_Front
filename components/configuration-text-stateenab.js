import { useMemo } from "react";
import styles from "./configuration-text-stateenab.module.css";

const ConfigurationTextStateenab = ({
  button,
  configurationTextStateenaBorderRadius,
  configurationTextStateenaOverflow,
  configurationTextStateenaDisplay,
  configurationTextStateenaFlexDirection,
  configurationTextStateenaAlignItems,
  configurationTextStateenaJustifyContent,
  configurationTextStateenaPosition,
  configurationTextStateenaTop,
  configurationTextStateenaLeft,
  labelTextColor,
  configurationTextStateenaCursor,
  configurationTextStateenaBorder,
  configurationTextStateenaPadding,
  configurationTextStateenaBackgroundColor,
  stateLayerBoxSizing,
  labelTextDisplay,
}) => {
  const configurationTextStateenabStyle = useMemo(() => {
    return {
      borderRadius: configurationTextStateenaBorderRadius,
      overflow: configurationTextStateenaOverflow,
      display: configurationTextStateenaDisplay,
      flexDirection: configurationTextStateenaFlexDirection,
      alignItems: configurationTextStateenaAlignItems,
      justifyContent: configurationTextStateenaJustifyContent,
      position: configurationTextStateenaPosition,
      top: configurationTextStateenaTop,
      left: configurationTextStateenaLeft,
      cursor: configurationTextStateenaCursor,
      border: configurationTextStateenaBorder,
      padding: configurationTextStateenaPadding,
      backgroundColor: configurationTextStateenaBackgroundColor,
    };
  }, [
    configurationTextStateenaBorderRadius,
    configurationTextStateenaOverflow,
    configurationTextStateenaDisplay,
    configurationTextStateenaFlexDirection,
    configurationTextStateenaAlignItems,
    configurationTextStateenaJustifyContent,
    configurationTextStateenaPosition,
    configurationTextStateenaTop,
    configurationTextStateenaLeft,
    configurationTextStateenaCursor,
    configurationTextStateenaBorder,
    configurationTextStateenaPadding,
    configurationTextStateenaBackgroundColor,
  ]);

  const labelTextStyle = useMemo(() => {
    return {
      color: labelTextColor,
      display: labelTextDisplay,
    };
  }, [labelTextColor, labelTextDisplay]);

  const stateLayerStyle = useMemo(() => {
    return {
      boxSizing: stateLayerBoxSizing,
    };
  }, [stateLayerBoxSizing]);

  return (
    <div
      className={styles.configurationtextStateenab}
      style={configurationTextStateenabStyle}
    >
      <div className={styles.stateLayer} style={stateLayerStyle}>
        <div className={styles.labelText} style={labelTextStyle}>
          {button}
        </div>
      </div>
    </div>
  );
};

export default ConfigurationTextStateenab;
