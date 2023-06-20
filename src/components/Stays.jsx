import Card from "./Card";
import { motion } from "framer-motion";

const Stays = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="my-4"
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[2rem] font-bold">Stays in ...</h1>
        <span className="text-titleColor">12+ stays</span>
      </div>
      <Card />
    </motion.section>
  );
};

export default Stays;
