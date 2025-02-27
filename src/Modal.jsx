import React from 'react';
import wow from "./assets/wow.gif";
import { FaGift } from "react-icons/fa6";

const Modal = ({ open, onClose }) => {
      return (
            <>
                  {/* backdrop */}
                  <div
                        onClick={() => onClose()}
                        className={`overflow-y-scroll fixed inset-0 flex justify-center items-center transition-colors ${ open ? "visible bg-black/20" : "invisible" } `}
                  >
                        {/* white background */}

                        <div className={`bg-white rounded-xl shadow p-6 transition-all ${ open ? "scale-100 opacity-100" : "scale-125 opacity-0" }`}
                              onClick={(e) => e.stopPropagation()}
                        >

                              <div className="text-center mx-5 w-[250px] md:w-[400px]">
                                    <div className="mx-auto my-4">
                                          <div className="flex justify-center">
                                                <img
                                                      src={wow}
                                                      alt="wow gif"
                                                      width='40%'
                                                />
                                          </div>


                                          <div className="my-7">
                                                <h4 className="text-green-600 font-bold text-2xl mb-2">
                                                      Congratulations
                                                </h4>
                                                <p className="text-gray-600">
                                                      You’ve earned 1000 WESPoints
                                                </p>

                                          </div>

                                          <div className="rounded-xl py-4 px-6 bg-[#E6EEF7] text-[#0256B2] ">
                                                <h4 className="font-bold text-base mb-4 flex items-center justify-center gap-2">
                                                      <FaGift />   Your Rewards
                                                </h4>
                                                <p className="font-medium mb-3">
                                                      2000 WESPoint Unlocked
                                                </p>
                                                <p className="text-sm font-normal ">
                                                      Want to know your employability status? Take the ESA with your 2000 WESPoints to get started!
                                                </p>
                                                <button
                                                      type="button"
                                                      className="outline-none w-full py-2 text-md text-medium bg-[#0256B2] text-white rounded-lg font-bold my-5"
                                                      onClick={() => onClose()}
                                                >
                                                      Take ESA
                                                </button>
                                          </div>
                                    </div>
                              </div>

                        </div>

                  </div>


            </>

      );
};

export default Modal;