import { useState } from "react";
import { GoPlus } from "react-icons/go";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex md:flex-row flex-col 2xl:m-auto border-2 py-8 w-full text-white bg-gradient-to-r from-[#350e57] to-[#152ca0] min-h-screen">
        <div className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold pt-5 px-10 2xl:px-16 w-[100%] md:w-[50%]">
          <h1 className="text-center pb-4">
            <p className="m-0 leading-[30px] sm:leading-[65px]">
              Frequently Asked
            </p>
            <p className="m-0">
              <i>Questions</i>
            </p>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start gap-[50px] max-w-full sm:gap-[250px] w-[100%] md:w-[50%]">
          <div className="max-w-screen-xl px-5 2xl:px-10 min-h-screen">
            <div className="grid divide-neutral-200">
              <div className="py-4">
                <details className="group">
                  <summary className="flex justify-start items-center font-medium text-2xl sm:text-3xl cursor-pointer list-none">
                    <span className="transition pr-4 group-open:rotate-45">
                      <GoPlus />
                    </span>
                    <span>What is this Youtube Channel about?</span>
                  </summary>
                  <p className="text-gray-200 pl-10 md:pl-12 sm:text-xl text-base mt-3 group-open:animate-fdeIn">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum vitae fugit pariatur rem, et ducimus, neque
                    voluptatum quidem optio repellendus iusto voluptates
                    repellat impedit asperiores, aut nihil voluptatibus qui
                    maxime.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
