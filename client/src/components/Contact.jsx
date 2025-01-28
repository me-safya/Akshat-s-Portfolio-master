import { Highlight } from "./ui/hero-highlights";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div id="contact" className="py-20 px-3 pb-32 bg-windsor-950 relative">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl md:px-4 lg:px-16 md:text-4xl lg:text-5xl font-medium text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug mx-auto "
      >
        <Highlight className="text-windsor-100 bg-gradient-to-r ">
          Let's Connect
        </Highlight>
      </motion.h1>
      <img
        src="/assets/downArr.svg"
        className="absolute -skew-x-12 rotate-90 left-10"
      />
    </div>
  );
}

export default Contact;
