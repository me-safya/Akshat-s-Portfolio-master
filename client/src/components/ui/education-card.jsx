import { motion } from "framer-motion";

function EducationCard({ education, idx }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      viewport={{ once: true }}
      whileInView={{
        transition: { duration: 0.07, delay: 0.04 * (idx + 1) },
        scale: 1,
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.08 } }}
      className="w-full  bg-[#1B1534] rounded-md shadow-lg  hover:shadow-xl transition-all duration-150  p-5 text-windsor-200"
    >
      <div className="flex items-center justify-between border-b border-windsor-400 mb-3">
        <div className="flex items-center gap-2">
          <img className="h-8 md:h-10 bg-windsor-200" src={education.logo} />
          <h5 className="text-lg lg:text-xl">{education.university}</h5>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 text-windsor-300 text-sm">
        <h5 className="flex-1">{education.degree}</h5>
        <p>
          {education.startDate}-{education.endDate}
        </p>
      </div>
    </motion.div>
  );
}

export default EducationCard;
