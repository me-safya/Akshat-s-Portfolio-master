import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlights";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const skills = [
  "Python",
  "Salesforce",
  "C",
  "Tableau",
  "Power BI",
  "Git",
  "MS office",
];

function Skills() {
  return (
    <div id="skills" className="py-20 px-3  bg-[#1B1534]">
      <div className="max-w-7xl mx-auto border-l-4 border-windsor-800">
        <HeroHighlight>
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
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-medium text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            <Highlight className="text-windsor-100 bg-gradient-to-r ">
              Skills
            </Highlight>
          </motion.h1>
        </HeroHighlight>
        <div className="flex flex-wrap gap-5 mt-8 p-3 w-fit mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              viewport={{ once: true }}
              initial={{ x: "-20%", opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: idx * 0.03 },
              }}
              key={skill}
            >
              <CardContainer>
                <CardBody className=" relative group/card bg-gradient-to-br from-windsor-300 via-windsor-400 to-windsor-600 rounded-lg px-6 py-3 border border-windsor-400 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-150">
                  <CardItem
                    translateZ="20"
                    className=" text-windsor-950 text-sm md:text-base"
                  >
                    {skill}
                  </CardItem>
                  <CardItem translateZ="40">
                    <img
                      src={`/assets/${skill
                        .split(" ")
                        .join("-")
                        .toLocaleLowerCase()}-logo.png`}
                      className="h-20 w-20"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
