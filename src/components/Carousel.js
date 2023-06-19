import { CAROUSEL_IMG } from "../constants";

const Carousel = ({ carousels }) => {
  return (
    <div className="flex justify-center items-center bg-slate-900 p-2">
      <button
        onClick={() => {
          document.getElementById("box").scrollLeft -= 265;
        }}
        className=" text-black bg-white px-2 py-2  rounded-full "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <div className="w-[75%] h-52 p-2 relative overflow-hidden">
        <div
          className="flex w-full absolute py-2 overflow-auto scroll-smooth cursor-pointer "
          id="box"
        >
          {carousels.map((carousel) => (
            <img
              key={carousel?.data?.bannerId}
              className="w-44 m-2 p-2 rounded-2xl"
              alt="someImg"
              src={CAROUSEL_IMG + carousel?.data?.creativeId}
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          document.getElementById("box").scrollLeft += 265;
        }}
        className="ml-2 text-black bg-white px-2 py-2  rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );

  // return (
  //   <section>
  //     <div className="relative">
  //       <div className="h-[30vh] bg-slate-600">
  //         <img src={Image} className="h-full w-full object-cover" />
  //       </div>
  //       <div className="absolute px-5 flex top-0 left-0 w-full h-full">
  //         <div className="my-auto w-full flex justify-between">
  //           <button className="bg-white p-2 rounded-full shadow-lg bg-opacity-80">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke-width="1.5"
  //               stroke="currentColor"
  //               class="w-6 h-6"
  //             >
  //               <path
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
  //               />
  //             </svg>
  //           </button>
  //           <button className="bg-white p-2 rounded-full shadow-lg bg-opacity-80">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke-width="1.5"
  //               stroke="currentColor"
  //               class="w-6 h-6"
  //             >
  //               <path
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
  //               />
  //             </svg>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Carousel;
