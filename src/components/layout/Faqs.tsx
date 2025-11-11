'use client';

import React, { useState } from 'react';
import Question from '../Question';
import Image from 'next/image';
import { questions } from '@/data/questions';

const Faqs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="default-padding bg-myGray6 relative -mt-1 pt-10 lg:pt-0 pb-30 lg:pb-40 flex flex-col gap-12 justify-center items-center">
      <h3 className="text-darkgreen2 general-title font-rubik">FAQs</h3>
      <div className="absolute w-full top-0 h-full opacity-5">
        <Image
          src="/images/chipsbg.png"
          alt="salad"
          fill
          className="object-contain h-auto ml-auto"
        />
      </div>

      <div className="absolute right-30 bottom-30 opacity-20 -rotate-40">
        <Image src="/images/s4.png" alt="" height={70} width={70} />
      </div>

      <div className="absolute left-40 bottom-180 md:bottom-90 opacity-20 -rotate-40">
        <Image src="/images/s3.png" alt="" height={70} width={70} />
      </div>

      <div className="w-full max-w-[800px] h-fit flex flex-wrap justify-center gap-8 mt-4">
        {questions.map(({ id, question, answer }) => (
          <Question
            key={id}
            question={question}
            answer={answer}
            open={openId === id}
            onToggle={() => setOpenId(openId === id ? null : id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
