import { AiOutlineSearch } from "react-icons/ai";
import { Logo, Search } from "../icons/Icons";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col w-[100%] md:flex-row md:justify-between lg:items-center"
    >
      <figure>
        <Logo />
      </figure>
      <div className="relative drop-shadow-xl flex items-center mt-6 h-[50px] lg:mt-0">
        <ul className="bg-white border-r-[1px] rounded-tl-xl rounded-bl-xl h-[100%] w-[45%]"></ul>
        <input
          type="text"
          placeholder="Add guests"
          className="bg-white h-[100%] w-[45%] p-4"
        />
        <Search />
      </div>
    </motion.nav>
  );
};

export default Navbar;
