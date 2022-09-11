import React from "react";
import Courses from "../../components/Courses";
import Layout from "../../components/Layout";

export default function resources() {
  return (
    <Layout title="resources">
      <h1 className="font-bold font-pop text-2xl text-center mb-5 mt-5">
        Resources
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4  sm:m-10  ">
        <Courses />
        <Courses />
        <Courses />
        <Courses />
        <Courses />
        <Courses />
        <Courses />
        <Courses />
      </div>
    </Layout>
  );
}
