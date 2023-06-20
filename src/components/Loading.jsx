import { Logo } from "../icons/Icons";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 w-[100%] min-h-screen z-50 m-auto"
    >
      <Logo />
    </motion.div>
  );
};

export default Loading;
