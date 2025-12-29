import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants"; // Assuming you have a fadeIn variant

const SectionTitle = ({ subTitle, title, extraClass, titleClass }) => {
  return (
    <div className={`section-title-block ${extraClass}`}>
      {subTitle && (
        <h6
          className="section-sub-title position-relative d-inline-block text-uppercase">
          {subTitle}
        </h6>
      )}
      <motion.h2
        className={`section-title ${titleClass}`}
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
