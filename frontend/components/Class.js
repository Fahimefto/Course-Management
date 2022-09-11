import React from "react";

export default function Class({ data }) {
  return (
    <div className="grid p-5 m-5 shadow-xl ">
      <div className="font-bold font-pop text-md ">
        <button className="p-3 px-10 rounded-full bg-indigo-200 mb-5 ml-5 ">
          {data.attributes.date + " - " + data.attributes.time}
        </button>
        <button className="p-2 rounded-md  flex justify-end gap-2 ml-5">
          <div className="bg-red-200 p-2 rounded-lg ">Theory</div>
          <div className="bg-amber-200 p-2 rounded-lg">Lab</div>
        </button>
      </div>

      <div className="font-bold font-pop ml-5">
        <button className="bg-green-200 rounded-full p-3 px-10">
          {data.attributes.class}
        </button>
      </div>

      <div className="font-bold font-pop  mt-5">
        <button className="rounded-lg  bg-red-200  xl:rounded-full p-5 sm:rounded-lg  ml-5">
          {data.attributes.description}
        </button>
      </div>
      <div className="p-3 rounded-full flex justify-center gap-5 mt-10">
        <button className="p-2 rounded-lg font-pop font-bold bg-indigo-300 text-indigo-900">
          Comment
        </button>
        <button className="p-2 rounded-lg font-pop font-bold bg-indigo-300 text-indigo-900">
          All comments
        </button>
      </div>
    </div>
  );
}
