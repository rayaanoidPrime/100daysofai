import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
// import { Button } from "./moving-border";

interface HeroProps {}

export const Hero = ({ ...props }: HeroProps) => {
  return (
    <div className="flex flex-col py-6 sm:py-16 ">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-start px-4"
      >
        <div className="text-3xl md:text-7xl text-white text-center light:text-black">
          <div className="text-slate-300 leading-tight">Welcome to</div>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="text-4xl md:text-8xl text-transparent">
              <div
                className={cn(`
                    [--shimmer-gradient:repeating-linear-gradient(45deg,var(--transparent)_10%,var(--transparent)_20%,var(--gray-300)_40%,var(--gray-300)_60%,var(--transparent)_70%)]
                    [background-image:var(--shimmer-gradient)]
                    [background-size:200%,_100%]
                    animate-shimmer
                    bg-clip-text
                  `)}
              >
                #
              </div>
            </div>
            <div className="font-bold ">100 days of AI</div>
          </div>
          <div className="rounded-[10px] mb-2 py-[8px] px-4 justify-center items-center text-center">
            <div className="w-fit mx-auto py-1 px-4 text-base font-normal rounded-xl relative bg-transparent border border-cyan-900 backdrop-blur-2xl">
              <span className="w-fit text-gray-300">
                {" "}
                Start your AI Journey
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
