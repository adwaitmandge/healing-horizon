import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import FeaturesHome from "../components/Features";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const submitHandler = async () => {
    console.log("The entered data is ");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow mt-28 mx-10">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="z-10 w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md border-t-2 border-b-2 border-l-2 border-r-2">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Institute
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone Number
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 50 bg-gray-50 dark:bg-gray-800"
                >
                  Age
                </th>
                <th scope="col" class="px-6 py-3">
                  Region
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Substance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Emily Anderson
                </th>
                <td class="px-6 py-4">Massachusetts Institute of Technology</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  anderson@gmail.com
                </td>
                <td class="px-6 py-4">(+91)789-1234</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">18</td>
                <td class="px-6 py-4">Kerala</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Benjamin Collins
                </th>
                <td class="px-6 py-4">Massachusetts Institute of Technology</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  collins@gmail.com
                </td>
                <td class="px-6 py-4">(+91) 234-5678</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">19</td>
                <td class="px-6 py-4">Kerala</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Sophie Ramerez
                </th>
                <td class="px-6 py-4">Massachusetts Institute of Technology</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  ramerez@gmail.com
                </td>
                <td class="px-6 py-4">(+91) 901-2345</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">18</td>
                <td class="px-6 py-4">Kerala</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Jacob Patel
                </th>
                <td class="px-6 py-4">Massachusetts Institute of Technology</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  patel@gmail.com
                </td>
                <td class="px-6 py-4">(+91) 678-9012</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">20</td>
                <td class="px-6 py-4">Kerala</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Olivia Campbell
                </th>
                <td class="px-6 py-4">Massachusetts Institute of Technology</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  campbell@gmail.com
                </td>
                <td class="px-6 py-4">(+91) 123-4567</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">18</td>
                <td class="px-6 py-4">Kerala</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      {/* <Banner /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
