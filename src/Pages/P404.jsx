import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

const P404 = () => {
  return (
    <div className="err">
      <h1>404</h1>
      <h2>
        This page does not exist!{" "}
        <Link className="a" to={"/"}>
          Go back
        </Link>
      </h2>

      <Spline
        className="spline"
        scene="https://draft.spline.design/Zf7eTdT7q271iYNi/scene.spline"
      />
    </div>
  );
};

export default P404;
