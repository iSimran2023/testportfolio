import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certification } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, title, image }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary rounded-xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[250px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="p-2">
        <h3 className="text-white text-[20px] text-center">{title}</h3>
      </div>
    </Tilt>
  </motion.div>
);

const Certification = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learned so far</p>
        <h2 className={styles.sectionHeadText}>Certification.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7">
        {certification.map((cert, index) => (
          <CertificationCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "certification");
