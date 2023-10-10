import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  id: number;
  title: string;
  description: string;
}

interface AccordionProps {
  questions: Question[];
}

const Accordion: React.FC<AccordionProps> = ({ questions }) => {
  // Set the first question to be open initially
  const [openQuestion, setOpenQuestion] = useState<number | null>(
    questions.length > 0 ? questions[0].id : null
  );

  const toggleAccordion = (questionId: number) => {
    setOpenQuestion((prevOpenQuestion) =>
      prevOpenQuestion === questionId ? null : questionId
    );
  };

  return (
    // i've added a height so Accordion has a fixed hight and the content around will not be moved
    <div className="flex flex-col space-y-4 justify-center h-[400px]">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => toggleAccordion(question.id)}
          className={`cursor-pointer p-4 ${
            openQuestion === question.id ? "bg-blue-10 py-8" : "bg-white"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 font-bold text-xl">
              <span>{openQuestion === question.id ? "−" : "+"}</span>
              <p> {question.title}</p>
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
                  <p className="font-light"> {question.description} </p>
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
