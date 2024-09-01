import { useNavigate } from "react-router-dom";
import svg from "../assets/404.svg";

function PageNotFound() {
  const navigat = useNavigate();
  return (
    <>
      <div className="cont-404">
        <img src={svg} alt="svg" />
        <button onClick={() => navigat("/")}>Back to Home</button>
      </div>
    </>
  );
}

export default PageNotFound;
