import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import Courses from "../components/Courses";
import Exam from "../components/Exam";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <h1 className="font-bold font-pop text-2xl text-center mb-5 mt-5">
            CR Dashboard
          </h1>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase font-pop px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? `text-black bg-${color}-400`
                    : `text-${color}-600 bg-amber-100`)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> Class
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase font-pop px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? `text-black bg-${color}-400`
                    : `text-${color}-600 bg-amber-100`)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Course
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold font-pop uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? `text-black bg-${color}-400`
                    : `text-${color}-600 bg-amber-100`)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Exam
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold font-pop uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? `text-black bg-${color}-400`
                    : `text-${color}-600 bg-amber-100`)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Resources
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div>
                    <div className="grid gap-5 grid-cols-3  text-center">
                      <label
                        htmlFor="my-modal-3"
                        className="bg-green-200 p-3 font-pop font-bold "
                      >
                        Add Class
                      </label>
                      <label
                        htmlFor="my-modal-3"
                        className="bg-red-200 p-3 font-pop font-bold"
                      >
                        Delete Class
                      </label>
                      <label
                        htmlFor="my-modal-3"
                        className="bg-red-200 p-3 font-pop font-bold"
                      >
                        All Classes
                      </label>
                    </div>
                    <input
                      type="checkbox"
                      id="my-modal-3"
                      className="modal-toggle"
                    />

                    <div className="modal">
                      <div className="modal-box relative min-w-fit">
                        <label
                          htmlFor="my-modal-3"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <h3 className="text-lg font-bold font-pop  text-center">
                          Add Class
                        </h3>
                        <form className="flex flex-col mt-5 gap-5 ">
                          <input
                            type="text"
                            placeholder="Select Course"
                            className="select select-bordered select-success w-full "
                          />
                          <select
                            type="text"
                            placeholder="Class Type"
                            className="select select-bordered select-success w-full"
                          >
                            <option className="p-5">Lab</option>
                            <option className="p-5">Theory</option>
                          </select>
                          <input
                            type="date"
                            htmlFor="datepicker"
                            placeholder="Date & Time"
                            className="input input-bordered input-success w-full "
                          />
                          <input
                            type="text"
                            placeholder="Description"
                            className="input input-bordered input-success w-full overflow-y-auto p-20 "
                          />
                          <input
                            type="text"
                            placeholder="Class Link"
                            className="input input-bordered input-success w-full "
                          />
                          <div className="flex justify-end p-5 gap-5">
                            <button className="bg-green-200 p-2 rounded-lg font-bold font-pop text-green-800">
                              Add Class
                            </button>
                            <button className="bg-red-200 p-2 rounded-lg font-bold font-pop text-red-800">
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div></div>
                  <div>
                    <div className="grid grid-cols-2 xl:grid-cols-8">
                      <Courses />
                      <Courses />
                      <Courses />
                      <Courses />
                      <Courses />
                      <Courses />
                      <Courses />
                      <Courses />
                      <Courses />
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div></div>
                  <div>
                    <div className="grid grid-cols-1 xl:grid-cols-8">
                      <Exam />
                    </div>
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function dashboard() {
  return (
    <Layout title="Dashboard">
      <>
        <Tabs color="green" />;
      </>
    </Layout>
  );
}
