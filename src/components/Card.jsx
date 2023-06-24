import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { container, element } from "../utils/animation";
import { useSelector } from "react-redux";

const Card = () => {
  const stays = useSelector((state) => state.stays.data);
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={container}
      className="md:grid md:gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
    >
      {stays?.map((item, index) => {
        return (
          <motion.div
            key={index}
            variants={element}
            className="w-[100%] max-w-[395px] m-auto"
          >
            <img
              alt="photo"
              src={item.photo}
              className="rounded-xl w-[395px] h-[269px] transition-all hover:scale-90"
            />
            <ul id={index} className="w-[100%]">
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-x-2 mt-2">
                  {item.superHost && (
                    <span className="border-[1px] border-titleColor rounded-full px-[10px]">
                      SUPER HOST
                    </span>
                  )}
                  <p className="text-cardTypeColor">
                    {item.type} . {item.beds} beds
                  </p>
                </div>
                <div className="flex items-center">
                  <AiFillStar color="#EB5757" />
                  <span>{item.rating}</span>
                </div>
              </li>
              <li className="mt-2 mb-8">
                <span className="text-cardTitleColor font-medium text-[14px]">
                  {item.title}
                </span>
              </li>
            </ul>
          </motion.div>
        );
      })}
    </motion.article>
  );
};

export default Card;
