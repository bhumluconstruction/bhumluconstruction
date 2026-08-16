import React from "react";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
const Works = () => {
  return (
    <section className="bg-[url(/images/bgwork.png)] w-full">
      <div className="">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex items-center text-center ">
              <div className="rounded-full text-center items-center justify-center bg-cyan-100 flex py-2 px-5 h-10 text-cyan-700 gap-2">
                <span>
                  <IoStar color="#F59E0B" />
                </span>
                <span>5.0</span>
              </div>
              <span><hr className="mx-4 h-px w-16 bg-slate-300 border-0" /></span>
              <h2 className="font-oswald text-slate-900 font-semibold text-3xl md:text-[56px]">
                <span className="font-island font-medium text-4xl md:text-[112px]">R</span>
                ated
              </h2>
            </div>

            <h2 className="font-oswald text-primary font-semibold text-[56px]">
              -Follow Our Work
            </h2>
          </div>

          <div className="px-6 md:px-[100px]">
            <div className="md:flex-row flex flex-col gap-10">
              <div className="md:flex-row flex flex-col gap-10">
                <div className="flex flex-col p-6 md:p-[32px] gap-5 text-slate-900 shadow-lg shadow-gray-200 bg-white w-full md:w-[536px] h-auto md:h-[296px]">
                  <p>
                    "If a garden could be a sacred space, then this is it – a
                    peaceful sanctuary where every stone and flower feels
                    intentional. The team transformed our yard into something
                    truly magical. Thank you for crafting this slice of
                    paradise. I love it here and always will."
                  </p>
                  <div className="flex flex-col font-medium">
                    <span className="font-bold">Sophy Roberts</span>
                    <span>Janurary 12, 2025</span>
                  </div>
                </div>
                <div className="flex flex-col p-6 md:p-[32px] gap-5 text-slate-900 relative mt-12 md:mt-50 shadow-lg shadow-gray-200 bg-white w-full md:w-[536px] h-auto md:h-[296px]">
                  <p>
                    Called them and they made an appointment to show up that
                    day. The appointment was arranged according to my schedule.
                    Friendly, professional. Took a look at my door and sent me a
                    quote on my special order door (I knew that it was special
                    order before they arrived, my windows are odd - so no
                    surprises) that was quite reasonable. 
                  </p>
                  <div className="flex flex-col font-medium">
                    <span className="font-bold">Kate Doty</span>
                    <span>Janurary 12, 2025</span>
                  </div>
                </div>
                <div className="w-full md:w-[568px] h-auto md:h-[736px] bg-[url(/images/Instaimage.png)] bg-cover bg-center p-0 relative md:top-[-30]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
