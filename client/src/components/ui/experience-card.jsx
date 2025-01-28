import { motion } from "framer-motion";

function ExperienceCard({ experience, idx }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      viewport={{ once: true }}
      whileInView={{
        transition: { duration: 0.07, delay: 0.04 * (idx + 1) },
        scale: 1,
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.05 } }}
      className="w-full bg-[#1B1534] rounded-md shadow-lg  hover:shadow-xl transition-all duration-150 p-3 text-windsor-200"
    >
      <div className="flex items-center justify-between border-b border-windsor-400 mb-3">
        <div className="flex items-center gap-2">
          <img className="h-8 md:h-10 " src={""} />
          <h5 className="text-lg lg:text-xl">{experience.company}</h5>
        </div>
        <p>{experience.location}</p>
      </div>
      <div className="flex items-center justify-between gap-3 text-windsor-300 text-sm">
        <h5 className="flex-1">{experience.role}</h5>
        <p>
          {experience.startDate}-{experience.endDate}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 my-2">
        {experience.toolsAndTechnologies.map((tool) => (
          <span
            className=" bg-windsor-500 p-1 px-2 text-xs rounded-full"
            key={tool}
          >
            {tool}
          </span>
        ))}
      </div>
      <ul className="flex flex-col gap-1 list-disc px-4">
        {experience.responsibilities.map((resp, index) => (
          <li key={index} className="text-windsor-300 text-sm">
            {resp}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ExperienceCard;
