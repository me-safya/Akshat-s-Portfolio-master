import { motion } from "framer-motion";
import { FlipWords } from "./ui/filp-words";
import { HeroHighlight } from "./ui/hero-highlights";

function HeroSection() {
  const words = ["Hallo!", "Hello!", "Namaste!"];

  return (
    <div
      id="home"
      className="bg-gradient-to-b from-windsor-800 via-windsor-900 to-windsor-950 h-screen"
    >
      <div className="mx-auto max-w-7xl h-full flex flex-col  justify-center items-center gap-6 p-4 md:p-6 lg:p-8 ">
        <HeroHighlight>
          <motion.img
            viewport={{ once: true }}
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            src="/assets/safya-profile.jpg"
            alt="Logo"
            className="w-44 h-44 md:h-48 md:w-48 lg:h-60 lg:w-60 rounded-full p-1 bg-windsor-400 shadow-xl"
          />
        </HeroHighlight>
        <div>
          <motion.h3
            viewport={{ once: true }}
            initial={{ x: "-20%", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            className="w-fit text-3xl pt-3  md:text-5xl  lg:text-6xl font-playwrite "
          >
            <FlipWords
              words={words}
              duration={1000}
              className={"-ml-2 mb-1 "}
            />
          </motion.h3>
          <motion.h2
            viewport={{ once: true }}
            initial={{ x: "10%", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            className=" font-funnel text-4xl md:text-6xl lg:text-7xl text-windsor-400 mb-10"
          >
            I'm{" "}
            <span className="bg-gradient-to-br from-windsor-500  to-windsor-600 bg-clip-text text-transparent">
              <span className="border-b-4 border-windsor-500">Ak</span>
              shat
            </span>{" "}
            Safya
          </motion.h2>
          <div className="pb-3">
            <motion.p
              viewport={{ once: true }}
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className="text-windsor-200 font-thin text-sm md:text-base text-justify"
            >
              Bachelor of Technology graduate with a strong foundation in
              Python, Machine Learning, IoT, and SQL, currently pursuing a
              Master's in Information and Communication Technology with a
              specialization in Embedded Systems. A technology-driven and
              goal-oriented individual, aspiring learner with a self-motivating
              personality, and sociable demeanor, eager to blossom and evolve
              further. Open to constructive feedback and dedicated to achieving
              excellence in all endeavors. Fluent in English and German
              languages.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
