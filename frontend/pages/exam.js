import React from "react";

import Exam from "../components/Exam";
import Layout from "../components/Layout";

export default function exam() {
  return (
    <Layout title="Exam">
      <h1 className="font-bold font-pop text-2xl text-center mb-5 mt-5">
        Exam List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1">
        <Exam />
        <Exam />
        <Exam />
        <Exam />
        <Exam />
      </div>
    </Layout>
  );
}
