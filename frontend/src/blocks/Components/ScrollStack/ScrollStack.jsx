import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Card({ children, i, progress, range, targetScale }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative h-[90vh] w-[90vw] rounded-3xl bg-us-light origin-top shadow-2xl overflow-hidden border border-us-gray"
      >
        <div className="h-full w-full">
            {children}
        </div>
      </motion.div>
    </div>
  );
}

export default function ScrollStack({ items }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={container} className="relative mt-[10vh]">
      {items.map((item, i) => {
        const targetScale = 1 - ( (items.length - i) * 0.05);
        return (
          <Card key={i} i={i} {...item} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}>
            {item.content}
          </Card>
        );
      })}
    </div>
  );
}
