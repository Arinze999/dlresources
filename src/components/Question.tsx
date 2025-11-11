'use client';

import React, { useId } from 'react';

type QuestionProps = {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

const Question: React.FC<QuestionProps> = ({ question, answer, open, onToggle }) => {
  const answerId = useId();

  return (
    <div className="w-full rounded-xl border-2 border-darkgreen2/20 p-4 backdrop-blur-md">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={answerId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="md:text-base font-medium">{question}</span>

        <svg
          className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z" />
        </svg>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        aria-hidden={!open}
      >
        <div id={answerId} className="overflow-hidden pr-1">
          <p className={`mt-3 text-sm leading-6 text-gray-800 transition-all duration-300 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
