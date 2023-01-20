import React from 'react'
import FeedbackCard from './FeedbackCard'
import { feedback } from '@/constants'

const Testimonials = () => (
    <section id="Testimonials" className="sm:py-16 py-6 flex justify-center items-center flex-col relative bg-[#e4eaef]">
        <div className="w-full flex text-center justify-center md:flex-row flex-col sm:mb-8 mb-3 relative z-[1]">
            <h1 className=" font-monserrat font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full"> What people are saying about us</h1>

        </div>


        <div className=" flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
              {feedback.map((card) => (
               <FeedbackCard key={card.id} {...card} />
              ))}
        </div>
    </section>
)

export default Testimonials