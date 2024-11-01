"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Telegram } from "@mui/icons-material";

export default function SectionThree() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h1 className="max-w-lg mb-2 italic text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                Choose Your Plan
              </h1>

              <ul className="list-disc ml-5 text-white text-lg">
                <li>Monthly: $99.99</li>
              </ul>

              <h1 className="max-w-lg mb-6 italic text-xl leading-none tracking-tight text-white sm:text-2xl md:mx-auto">
                Cancel anytime.{" "}
                <span className="text-red-400 font-bold">No refunds!</span>
              </h1>

              <div className="grid max-w-2xl mx-auto">
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-px h-10 opacity-0 sm:h-full" />
                    <div>
                      <div className="flex items-center justify-center w-8 h-8 text-xs text-orange-200 font-medium border rounded-full">
                        1
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div className="sm:mr-5">
                      <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full  sm:w-24 sm:h-24">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-bold sm:text-base text-white italic">
                        Bitcoin
                      </p>
                      <p className="text-sm text-white">Wallet Address</p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-px h-10 bg-gray-300 sm:h-full" />
                    <div>
                      <div className="flex items-center justify-center text-orange-200 w-8 h-8 text-xs font-medium border rounded-full">
                        2
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div className="sm:mr-5">
                      <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full  sm:w-24 sm:h-24">
                        <img
                          className="rounded-full"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yr98Y--6f6k2wPKHVa1hRqfND0GtgCyw_g&s"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-bold italic sm:text-base text-white">
                        Usdt
                      </p>
                      <p className="text-sm text-white">Wallet address</p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-px h-10 bg-gray-300 sm:h-full" />
                    <div>
                      <div className="flex items-center justify-center text-orange-200 w-8 h-8 text-xs font-medium border rounded-full">
                        3
                      </div>
                    </div>
                    <div className="w-px h-full opacity-0" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div className="sm:mr-5">
                      <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full  sm:w-24 sm:h-24">
                        <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white italic sm:text-base">
                        Usdc
                      </p>
                      <p className="text-sm text-white">Wallet address</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            className="text-center lg:w-2/5"
          >
            <div>
              <div className="p-8 bg-gray-900 rounded">
                <div className="mb-4 text-center">
                  <p className="text-xl font-medium tracking-wide text-white">
                    Pro Plan
                  </p>
                  <div className="flex items-center justify-center">
                    <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                      $99.99
                    </p>
                    <p className="text-lg text-gray-500">/ month</p>
                  </div>
                </div>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <div className="mr-3">
                      <VerifiedIcon className="text-teal-400" />
                    </div>
                    <p className="font-medium text-gray-300">
                      Exculsive Content
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <SupportAgentIcon className="text-teal-400" />
                    </div>
                    <p className="font-medium text-gray-300">Direct Support</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <SystemUpdateAltIcon className="text-teal-400" />
                    </div>
                    <p className="font-medium text-gray-300">Early Updates</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <GroupsIcon className="text-teal-400" />
                    </div>
                    <p className="font-medium text-gray-300">
                      Community Access
                    </p>
                  </li>
                </ul>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                >
                  Get Now
                </button>
              </div>
              <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
              <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
              <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
