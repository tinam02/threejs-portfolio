import React, { Suspense } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";
import { NameContainer, ProjectContainer, SocialsContainer } from "./Sections";
import Contact from "../Pages/Contact";
import ThreeDee from "./ThreeDee";

const Layout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <NameContainer />
        <ProjectContainer />
        <SocialsContainer />
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
          exit={{ opacity: 0 }}
        >
          <ThreeDee />
        </motion.div>
      </motion.div>
    </Suspense>
  );
};

export default Layout;
