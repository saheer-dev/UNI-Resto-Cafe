import React, { useContext, useState } from "react";
import { userContext } from "./Context_Api/ContextApi";
import "../style/style.css";
import Counter from "./Counter";

export default function Menu() {
  const details = useContext(userContext);
  const [silderindex, setSilderindex] = useState(0);
  let tableMenu = details.table_menu_list;

  console.log(tableMenu);

  function selectEachSliderindex(indexValue) {
    setSilderindex(indexValue);
  }

  if (tableMenu) {
    return (
      <div className="">
        <div className="w-[100vw]  flex justify-start items-center overflow-x-scroll select-none">
          {details.table_menu_list.map((e, index) => (
            <div onClick={() => selectEachSliderindex(index)}>
              <p
                className=" flex items-center justify-center w-[10rem] md:text-xl md:w-[23rem] "
                id={silderindex == index ? "active" : ""}
              >
                {e.menu_category}
              </p>
            </div>
          ))}
        </div>

        <div className="w-[390px] flex flex-col  md:w-[100vw]">
          {details.table_menu_list[silderindex].category_dishes.map((m) => (
            <div className="w-[390px] gap-2 flex place-start p-2  border-b-2 sm:w-[640px] sm:gap-1 md:w-[100vw] md:gap-2">
              <div className="w-6 mt-1">
                {m.dish_Type == 2 ? (
                  <div className="w-5 h-5 border-2 border-green-500 flex items-center justify-center">
                    <p className="w-1 h-1 rounded-full p-[5px] bg-green-500 border-2"></p>
                  </div>
                ) : (
                  <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center">
                    <p className="w-1 h-1 rounded-full p-[5px] bg-red-600 border-2"></p>
                  </div>
                )}
              </div>

              <div className="w-64 flex flex-col gap-3  sm:w-[640px] sm:gap-0 md:w-[100vw] md:gap-0">
                <h2 className="font-semibold text-lg md:text-xl">
                  {m.dish_name}
                </h2>
                <div className="flex justify-between md:pr-36">
                  <p className="font-semibold ">
                    {" "}
                    {m.dish_currency} {m.dish_price}
                  </p>

                  <p className="font-semibold w-24 md:text-lg ">
                    {m.dish_calories} calories
                  </p>
                </div>
                <p className="text-black/75"> {m.dish_description} </p>

                {m.dish_Availability !== true ? (
                  <p className="text-red-700">Not Available</p>
                ) : (
                  <Counter />
                )}

                {m.addonCat.length > 0 ? (
                  <p className="text-red-700">Customization Available</p>
                ) : (
                  <p></p>
                )}
              </div>

              <div>
                <div className="flex w-28 h-28 overflow-hidden object-cover md:w-32 md:pr-4">
                  {" "}
                  <img
                    className=" w-28 h-28 pr-1 md:w-32 md:h-28 md:rounded-xl"
                    src={m.dish_image}
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
