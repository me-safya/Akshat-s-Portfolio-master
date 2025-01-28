import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlights";
import EducationCard from "./ui/education-card";
import ExperienceCard from "./ui/experience-card";

const education = [
  {
    university: "Friedrich Alexander University",
    url: "",
    degree: "Master of Science in Information and Communication Technology",
    startDate: "04/2024",
    endDate: "Present",
    logo: "/assets/fau-logo.png",
  },
  {
    university: "Gautam Buddha University",
    url: "",
    degree:
      "Bachelor of Technology in Electronics and Communication Engineering",
    startDate: "07/2019",
    endDate: "06/2023",
    logo: "/assets/gbu-logo.jpg",
  },
];

const currentJob = {
  company: "Siemens Energy",
  location: "Erlangen, Germany",
  role: "Working Student - Account Management Europe",
  startDate: "11/2024",
  endDate: "Present",
  responsibilities: [
    "Designed and maintained comprehensive financial dashboards to support decision-making for Key Account Managers.",
    "Assisted in Salesforce-related tasks, including data entry, system optimization, and process improvements, ensuring accuracy and efficiency",
    "Contributed to business development initiatives, analyzing market trends and supporting the implementation of growth strategies.",
  ],
  toolsAndTechnologies: ["Power BI", "Salesforce", "Tableau", "Excel"],
};

const experience = [
  {
    company: "QRS Magnovit AG",
    location: "Liechtenstein (WFH)",
    role: "Data Analyst Intern",
    startDate: "11/2022",
    endDate: "11/2023",
    responsibilities: [
      "Utilized SQL and Python to analyze and manage datasets for over 3500, ensuring data integrity and compliance with HIPAA regulations.",
      "Developed and implemented patient scheduling algorithms using R, optimizing time management and increasing daily patient throughput by 20%.",
      "Created dynamic dashboards in Power BI to streamline data reporting processes, contributing to a 15% increase in revenue through enhanced operational insights.",
    ],
    toolsAndTechnologies: ["Power BI", "SQL", "Python", "R"],
  },
  {
    company: "Omdena",
    location: "Delhi (WFH)",
    role: "Data Science Intern",
    startDate: "07/2022",
    endDate: "10/2022",
    responsibilities: [
      "Designed and implemented a Credit Scoring model using machine learning algorithms in Python, enhancing the accuracy of credit evaluations for over 5,000 smallholder farmers.",
      "Conducted extensive data analysis and feature engineering using SQL and Pandas to identify key indicators of creditworthiness, improving model performance and prediction reliability.",
      "Collaborated with financial institutions to integrate the Credit Scoring model into their decision-making processes, resulting in a 30% increase in loan approval rates for eligible farmers.",
    ],
    toolsAndTechnologies: [
      "Python",
      "Regression",
      "PCA",
      "PyTorch",
      "Regularization",
      "Git",
      "Matplotlib",
    ],
  },
];

function EdNEx() {
  return (
    <div
      id="ednex"
      className="py-10 px-3 bg-gradient-to-br  from-[#8d3abd] to-windsor-700"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-start justify-evenly gap-8">
        <div className="w-full border-l-4 border-windsor-950">
          <HeroHighlight
            gridColor={"bg-dot-thick-[#1B1534]"}
            higlightColor={"bg-dot-thick-windsor-200"}
          >
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
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-medium  max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              <Highlight className="text-windsor-100 bg-gradient-to-r from-windsor-950 to-windsor-900">
                Career
              </Highlight>
            </motion.h1>
          </HeroHighlight>
          <div className="mt-10">
            <span className="bg-pink-400 ml-4 px-2 p-1 rounded-full">
              Current Job
            </span>
            <div className="p-4">
              <ExperienceCard experience={currentJob} idx={0} />
            </div>
          </div>
          <div className="mt-10">
            <span className="bg-fuchsia-500 ml-4 px-2 p-1 rounded-full">
              Past Experiences
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  p-4">
              {experience.map((exp, index) => (
                <ExperienceCard
                  experience={exp}
                  idx={index + 1}
                  key={exp.company}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full border-l-4 border-windsor-950">
          <HeroHighlight
            gridColor={"bg-dot-thick-[#1B1534]"}
            higlightColor={"bg-dot-thick-windsor-200"}
          >
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
              <Highlight className="text-windsor-100 bg-gradient-to-r from-windsor-950 to-windsor-900">
                Education
              </Highlight>
            </motion.h1>
          </HeroHighlight>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 p-4">
              {education.map((edu, index) => (
                <EducationCard education={edu} key={edu.degree} idx={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EdNEx;
