import React from "react";
import { MdBadge, MdSearch, MdSettings } from "react-icons/md";

const MainScreen = () => {
  return (
    <main className="flex flex-col justify-center h-full w-full">
      {/* SECTION 1 */}
      <section className="h-[300px] rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-2 w-full border  ">
        <div className="bg-gradient-to-r to-[#5C4433] from-[#7B470C] col-span-1 p-2 flex flex-col">
          <div className="flex justify-between items-center">
            <p className="text-[20px]">Challenge History</p>
            <p>
              <MdSettings size={20} />
            </p>
          </div>

          <div className="mt-5">
            <select className="bg-neutral-800 opacity-35 border rounded-md w-full h-[40px] px-2 outline-none">
              <option value="Java-Script">Java-Script</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>

          <div className="mt-3">
            <select
              className="bg-neutral-800 opacity-35   border rounded-md w-full h-[40px] px-2 outline-none"
              disabled
            >
              <option value="Level 1" disabled>
                Level 1
              </option>
            </select>
          </div>

          <div className="flex  mt-5 justify-center gap-4">
            <button className="px-4 py-2 border border-[silver] rounded-md">
              Resume
            </button>
            <button className="px-4 py-2 border border-[silver] rounded-md ">
              Restart
            </button>
          </div>

          <div className="w-full border rounded-md flex h-[45px] items-center mt-7">
            <input className="flex-1 bg-transparent h-full" />
            <MdSearch size={30} />
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <div className="my-3">
            <span className="bg-blue-600 mx-2 text-[12px] font-semibold rounded-full px-4 py-1">
              Level 1
            </span>
            <span className="bg-purple-600 mx-2 text-[12px] font-semibold rounded-full px-4 py-1">
              Stage 4
            </span>
            <span className="bg-red-600 mx-2 text-[12px] font-semibold rounded-full px-4 py-1">
              Question 3
            </span>
          </div>
          <div className=" w-full h-[210px] overflow-auto  bg-neutral-800 p-4">
            <div className="min-h-[150px] overflow-auto  ">Question 3</div>
          </div>
          <div className="flex-1" />
          <div className="w-full flex flex-wrap gap-2 p-2">
            {Array.from({ length: 4 }).map((el, i) => (
              <button
                key={i}
                className="uppercase text-[10px] font-semibold px-6 py-1 rounded-sm bg-neutral-600"
              >
                Array
              </button>
            ))}
          </div>
        </div>
      </section>

      <div>
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full min-h-[170px]">
          <div className="col-span-2 p-2 rounded-md bg-neutral-600 ">
            <p>JS</p>
            <div className="flex">
              {Array.from({ length: 2 }).map((el, i) => (
                <div key={i} className=" rounded-md p-3 flex  border m-2">
                  <div className="h-full flex items-center">
                    <MdBadge size={40} />
                  </div>
                  <div className=" ml-2 flex flex-col">
                    <h1 className="text-[20px] font-semibold">Level</h1>
                    <p className="-mt-1 text-[13px]">Badge</p>
                    <p className="mt-5 text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="flex-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 p-2 rounded-md bg-neutral-600 ">
            <p>JS</p>
            <div className="flex">
              {Array.from({ length: 2 }).map((el, i) => (
                <div key={i} className=" rounded-md p-3 flex  border m-2">
                  <div className="h-full flex items-center">
                    <MdBadge size={40} />
                  </div>
                  <div className=" ml-2 flex flex-col">
                    <h1 className="text-[20px] font-semibold">Level</h1>
                    <p className="-mt-1 text-[13px]">Badge</p>
                    <p className="mt-5 text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="flex-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border p-3 rounded-md">Advert</div>
        </section>
      </div>
      {/* <section>3</section> */}
    </main>
  );
};

export default MainScreen;
