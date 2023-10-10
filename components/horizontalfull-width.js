import { useMemo } from "react";
import styles from "./horizontalfull-width.module.css";

const HorizontalfullWidth = ({
  horizontalfullWidthWidth,
  horizontalfullWidthPosition,
  horizontalfullWidthTop,
  horizontalfullWidthLeft,
  horizontalfullWidthHeight,
  horizontalfullWidthTransform,
  horizontalfullWidthTransformOrigin,
}) => {
  const horizontalfullWidthStyle = useMemo(() => {
    return {
      width: horizontalfullWidthWidth,
      position: horizontalfullWidthPosition,
      top: horizontalfullWidthTop,
      left: horizontalfullWidthLeft,
      height: horizontalfullWidthHeight,
      transform: horizontalfullWidthTransform,
      transformOrigin: horizontalfullWidthTransformOrigin,
    };
  }, [
    horizontalfullWidthWidth,
    horizontalfullWidthPosition,
    horizontalfullWidthTop,
    horizontalfullWidthLeft,
    horizontalfullWidthHeight,
    horizontalfullWidthTransform,
    horizontalfullWidthTransformOrigin,
  ]);

  return (
    <div
      className={styles.horizontalfullWidth}
      style={horizontalfullWidthStyle}
    >
      <div className={styles.divider} />
    </div>
  );
};

export default HorizontalfullWidth;
