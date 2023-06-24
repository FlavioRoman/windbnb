import { motion } from "framer-motion";
import { Logo } from "../../icons/Icons";
import Location from "./Location";
import Button from "./Button";
import Guest from "./Guest";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col w-[100%] md:flex-row md:items-center md:justify-between "
    >
      <Logo />
      <div className="relative drop-shadow-xl flex items-center h-[50px] w-[100%] mt-6 md:w-[450px] md:mt-0">
        <Location />
        <Guest />
        <Button />
      </div>
    </motion.nav>
  );
};

export default Navbar;
