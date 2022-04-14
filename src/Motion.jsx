import { useState } from "react";
import { motion } from "framer-motion";

const gridSize = 4;
const grid = new Array(gridSize * gridSize).fill("");
const gridStyle = {
  padding: 20,
  display: "grid",
  gridGap: "10px",
  gridTemplateColumns: `repeat(${gridSize}, 40px)`,
  gridTemplateRows: `repeat(${gridSize}, 40px)`,
};

export const Square = (props) => {
  const { style, tint } = props;
  const [active, setActive] = useState(false);
  const handleTap = () => setActive(!active);

  const variants = {
    active: { scale: 1.1, rotate: 90, backgroundColor: "#96F" },
    inactive: { scale: 1, rotate: 0, backgroundColor: "#333" },
  };
  return (
    <>
      {" "}
      <motion.div 
        style={{ backgroundColor: "#444", borderRadius: 8 }}
        onTap={handleTap}
        variants={variants}
        animate={active ? "active" : "inactive"}
        whileHover={{
          backgroundColor: "#9966FF",
          rotate: Math.random() * 20 - 10,
        }}
      />
    
    </>
  );
};

export const Motion = (props) => {
  return (
    <motion.div style={{ ...gridStyle, ...props.style }}>
      {grid.map(() => (
        <Square {...props} />
      ))}
    </motion.div>
  );
};
