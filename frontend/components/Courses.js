import Link from "next/link";
import React from "react";

export default function Courses() {
  return (
    <div className="">
      <Link href="/resources/courses">
        <div className="grid p-5 m-5 shadow-xl place-items-center bg-slate-50">
          <div className="font-bold font-pop text-md ">
            <button className="p-3 px-10 rounded-full bg-green-200 mb-5 ">
              Data Science
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
