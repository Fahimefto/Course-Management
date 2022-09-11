import Link from "next/link";
import Class from "../components/Class";
import Layout from "../components/Layout";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:1337/api/classes");

        setData(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="mt-80 font-pop font-bold text-3xl text-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="mt-80 font-pop font-bold text-3xl text-center">
        Error...!
      </div>
    );
  return (
    <Layout title="Class">
      <h1 className="font-bold font-pop text-2xl text-center mb-5 mt-5">
        All Classes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data.data.map((x) => (
          <Class data={x} key={x.id} />
        ))}
      </div>
    </Layout>
  );
}
