import {
  FaLinkedin,
  FaInstagram,
  FaFolderOpen,
  FaGraduationCap,
} from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="z-50 sticky top-0 left-0 w-14 md:w-20 px-2 p-4 h-screen bg-windsor-950 shadow-[6px_0_10px_rgba(0,0,0,0.2)]">
      <motion.div className="flex items-center flex-col relative justify-between h-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <a href="#home">
            <motion.img
              whileHover={{
                filter: "grayscale(0%)",
                scale: 1.3,
                x: 10,
                transition: { delay: 0 },
              }}
              animate={{
                filter:
                  location.hash === "#home" || location.hash === ""
                    ? "grayscale(0%)"
                    : "grayscale(100%)",
              }}
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              src="/assets/safya-profile.jpg"
              alt="Logo"
              className={`w-8 h-8 rounded-md grayscale`}
            />
          </a>
          <motion.a
            href="#skills"
            whileHover={{
              x: 10,
              scale: 1.3,
              transition: { delay: 0 },
            }}
            animate={{}}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={` text-windsor-100 text-xl font-bold ${
              location.hash === "#skills"
                ? "bg-gradient-to-br from-windsor-600  to-windsor-700"
                : "bg-windsor-900"
            } p-2 rounded-md `}
          >
            <PiHandbagSimpleFill />
          </motion.a>
          <motion.a
            href="#ednex"
            whileHover={{
              x: 10,
              scale: 1.3,
            }}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={` text-windsor-100 text-xl font-bold ${
              location.hash === "#ednex"
                ? "bg-gradient-to-br from-windsor-600  to-windsor-700"
                : "bg-windsor-900"
            } p-2 rounded-md `}
          >
            <RiUser2Fill />
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{
              x: 10,
              scale: 1.3,
            }}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={` text-windsor-100 text-xl font-bold ${
              location.hash === "#projects"
                ? "bg-gradient-to-br from-windsor-600  to-windsor-700"
                : "bg-windsor-900"
            } p-2 rounded-md `}
          >
            <FaFolderOpen />
          </motion.a>
          <motion.a
            whileHover={{
              x: 10,
              scale: 1.3,
              transition: { delay: 0 },
            }}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0 }}
            className=" text-windsor-100 text-xl font-bold  bg-windsor-900 p-2 rounded-md "
          >
            <FaGraduationCap />
          </motion.a>
        </div>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className="flex flex-col items-center justify-center gap-4 text-lg my-2 mb-5"
        >
          <a href="https://x.com/me_safya" target="_blank" rel="noreferrer">
            <FaXTwitter className="text-windsor-400 hover:text-windsor-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-safya/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-windsor-400 hover:text-windsor-600" />
          </a>
          <a
            className="https://www.instagram.com/me.safya/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-windsor-400 hover:text-windsor-600" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
