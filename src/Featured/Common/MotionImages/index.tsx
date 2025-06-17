import { motion } from "framer-motion";
interface Images {
  image: string;
  className: any;
}

const MotionImage: React.FC<Images> = ({ image, className }) => {
  return (
    <motion.img
      src={image}
      whileHover={{ scale: 1.01, rotate: 2 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`${className}`}
    />
  );
};

export default MotionImage;
