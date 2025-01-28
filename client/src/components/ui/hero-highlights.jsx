import { cn } from "../../lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
  gridColor,
  higlightColor,
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "relative flex items-center   w-full group py-8",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div
        className={cn(
          "absolute inset-0 bg-dot-thick-windsor-600 pointer-events-none",
          gridColor
        )}
      />
      <motion.div
        className={cn(
          "pointer-events-none bg-dot-thick-windsor-950   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
          higlightColor
        )}
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: "-50%" }}
        whileInView={{ opacity: 1, x: 0 }}
        className={cn("relative z-20", className)}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <motion.h1
      whileInView={{
        backgroundSize: "100% 100%",
        trasnition: { duration: 0.1, delay: 0.1 },
      }}
      initial={{
        backgroundSize: "0% 100%",
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative block pb-1 w-full flex-1 pl-3 pr-20 rounded-lg  bg-gradient-to-r from-windsor-800 to-windsor-600 `,
        className
      )}
    >
      {children}
    </motion.h1>
  );
};
