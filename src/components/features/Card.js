import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({item:{title,des,icon}}) => {
  return (
    <div className="w-full px-12 h-140 py-5 rounded-lg flex items-center bg-slate-900 from-bodyColor to-[#202327] group hover:bg-cyan-700 hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-auto overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-26 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
        
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-indigo-600 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-indigo-600 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-indigo-600 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-indigo-600 inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card