import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlights";
import { Timeline } from "./ui/timeline";

const projects = [
  {
    title: "Financial Dashboard with Power BI",
    location: "Erlangen",
    link: "AdventureWorks Sales Dashboard",
    description: [
      "Developed an interactive sales performance dashboard in Power BI to track and visualize key metrics such as monthly sales, regional performance, and product-wise profitability, providing insights to the sales team and senior management.",
      "Collaborated with stakeholders to gather requirements and design the dashboard.",
      "Built and optimized data models and performed ETL operations using Power Query.",
      "Created interactive visuals, slicers, and drill-through reports in Power BI.",
      "Developed DAX measures for advanced calculations like Year-over-Year growth, running totals, and segmentation analysis.",
    ],
    toolsAndTechnologies: {
      dashboarding_Tools: ["Power BI"],
      dataModeling_And_ETL: ["Power Query", "SQL", "Excel"],
      calculations: ["DAX"],
    },
    achievements: [
      "Improved data-driven decision-making, leading to a 15% increase in sales performance within the first quarter of deployment.",
    ],
  },
  {
    title: "Machine Learning-Driven Health Analyzer",
    description: [
      "Developed a medical analysis system using Arduino UNO and sensors to collect real-time health parameters.",
      "Integrated sensor data with a machine learning model trained on historical health data.",
      "Achieved 80% accuracy in assessing individual health status.",
    ],
    toolsAndTechnologies: {
      machine_Learning_Libraries: ["Scikit-Learn"],
      programming_Languages: ["Python"],
      data_Processing: ["Pandas", "NumPy"],
      algorithm_Techniques: ["Logistic Regression"],
      hardware: ["Arduino UNO"],
      data_Visualization: ["Matplotlib"],
      version_Control: ["Git"],
      development_Environment: ["Jupyter Notebook"],
    },
  },
  {
    title: "Stock Market Forecasting Model",
    location: "Github",
    description: [
      "Developed a robust regression-based predictive model for stock market forecasting, leveraging historical data and key market indicators.",
      "Performed data preprocessing and feature engineering.",
      "Implemented dimensionality reduction techniques.",
      "Built and tested regression models.",
      "Wrote developer-level test scripts in Python.",
    ],
    toolsAndTechnologies: {
      programming_Languages: ["Python"],
      dataProcessing_And_Analysis: ["Pandas", "NumPy"],
      machine_Learning_Libraries: ["Scikit-Learn", "Statsmodels"],
      dimensionality_Reduction: [
        "Principal Component Analysis (PCA)",
        "Feature Selection",
      ],
      regression_Algorithms: ["Linear Regression"],
      data_Visualization: ["Matplotlib"],
      development_Environment: ["Jupyter Notebook"],
      version_Control: ["Git"],
    },
  },
];

function Projects() {
  const data = projects.map((project) => {
    return {
      title: project.title,
      content: (
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <p className="text-windsor-100 text-sm md:text-base mb-2 ">
            {project.description.join(" ")}
          </p>
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            {Object.entries(project.toolsAndTechnologies).map(
              ([category, tools]) => (
                <div className="flex flex-col" key={category}>
                  <h4 className="text-lg text-windsor-300 capitalize">
                    {category.split("_").join(" ")}
                  </h4>
                  <ul className=" list-disc pl-4 text-windsor-100">
                    {tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </motion.div>
      ),
    };
  });
  return (
    <>
      <div id="projects" className="py-20  px-3 bg-[#1B1534]">
        <div className="max-w-7xl mx-auto">
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
                Projects
              </Highlight>
            </motion.h1>
          </HeroHighlight>
          <Timeline data={data} />
        </div>
      </div>
    </>
  );
}

export default Projects;
