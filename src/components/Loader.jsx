import { Vortex } from "react-loader-spinner";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <Vortex
        visible={true}
        height="500px"
        width="500px"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple, cyan"]}
      />
    </div>
  );
}

export default Loader;
