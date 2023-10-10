import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Question {
  id: number;
  title: string;
  description: string;
}

interface AccordionProps {
  questions: Question[];
}

const Accordion: React.FC<AccordionProps> = ({ questions }) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(
    questions.length > 0 ? questions[0].id : null
  );

  const toggleAccordion = (questionId: number) => {
    setOpenQuestion((prevOpenQuestion) =>
      prevOpenQuestion === questionId ? null : questionId
    );
  };

  return (
    <div className="container-flex justify-center h-[500px] md:h-[400px]">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => toggleAccordion(question.id)}
          className={`cursor-pointer p-4 transition-colors ${
            openQuestion === question.id ? "bg-blue-10 py-8" : "bg-white"
          }`}
        >
          <div className="container-flex">
            <div className="flex flex-row space-x-4 items-center">
              <span className="text-2xl">{openQuestion === question.id ? "−" : "+"}</span>
              <p className="font-bold"> {question.title}</p>
            </div>
            <AnimatePresence initial={false}>
              {openQuestion === question.id && (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  className="pl-6"
                >
                  <p> {question.description} </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
