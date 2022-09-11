import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - SWE18 | SUST" : "SWE-18, SUST"}</title>
        <meta name="description" content="class update swe18" />
        <meta name="description" content="swe18,sust" />
        <meta name="description" content="sust swe18" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <header className=" fixed top-0 left-0 right-0 bg-slate-50 ">
          <div className="h-16 shadow-md">
            <div className=" flex justify-between ">
              <Link href="/">
                <button className="font-pop text-2xl mt-3 ml-5 font-bold text-gray-900 hover:bg-indigo-100 rounded-full ">
                  Class Update
                </button>
              </Link>
              <div className="flex">
                <Link href="/exam">
                  <button className=" font-pop  bg-indigo-200 hover:bg-indigo-300 font-bold text-sm text-indigo-800 p-1 rounded-md mr-2 mt-2 shadow-md">
                    Exam
                  </button>
                </Link>
                <Link href="/resources">
                  <button className=" font-pop bg-amber-200 hover:bg-amber-300 font-bold text-sm text-amber-800 p-1 rounded-md mr-2 mt-2 shadow-md">
                    Resources
                  </button>
                </Link>
                <Link href="/login">
                  <button className=" font-pop bg-green-200 hover:bg-green-300 font-bold text-sm text-green-800 p-1 rounded-md mr-2 mt-2 shadow-md">
                    LOGIN
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="mt-20">{children}</main>
        <footer className="h-20 font-pop font-bold text-center  shadow-inner p-5">
          Developed by 2018831052 , SEP 2022
        </footer>
      </div>
    </>
  );
}
