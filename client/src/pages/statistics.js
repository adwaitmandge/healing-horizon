import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import FeaturesHome from "../components/Features";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { UserState } from "@/UserProvider";
import { useRouter } from "next/router";
import Map from "@/components/Map";

const Home = () => {
  const router = useRouter();
  const { user } = UserState();

  const [hasMounted, setHasMounted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setHasMounted(true);
    if (!user) router.push("/login");
    setLoading(false);
  }, []);

  const getStudents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/student", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        method: "GET",
      });
      const data = await res.json();
      setStudents(data);
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  if (!hasMounted) return null;

  const submitHandler = async () => {
    console.log("The entered data is ");
  };

  if (loading) {
    return (
      <div className="h-max mt-40 items-center justify-center">
        <div class="max-w-xl mx-auto">
          <div class="p-4 bg-white border border-primary rounded-md">
            <div class="flex">
              <div class="mr-4 bg-gray-200 border border-gray-200 h-16 w-16 rounded animate-pulse"></div>
              <div class="space-y-1 flex flex-col w-full">
                <div class=" w-full flex items-center">
                  <div class="bg-gray-200 border border-gray-200 w-60 h-5 animate-pulse"></div>
                  <div class="ml-4 bg-ternary w-12 h-5 animate-pulse"></div>
                </div>
                <div class="bg-gray-200 border border-gray-200 w-36 h-5 animate-pulse"></div>
                <div class="bg-gray-200 border border-gray-200 w-full h-44 animate-pulse"></div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="bg-gray-200 border border-gray-200 w-16 h-5 animate-pulse"></div>
                <span class="bg-tertiary h-1 w-1 rounded animate-pulse"></span>
                <div class="bg-gray-200 border border-gray-200 w-16 h-5 animate-pulse"></div>
              </div>
              <div class="bg-gray-200 border border-gray-200 w-16 h-5 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
                {students.map((student) => {
                  console.log(student);
                  return (
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      >
                        {student.fullName}
                      </th>
                      <td class="px-6 py-4">{student.institute}</td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {student.email}
                      </td>
                      <td class="px-6 py-4">{student.phoneNumber}</td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {student.age}
                      </td>
                      <td class="px-6 py-4"> {student.region}</td>
                      <td class="px-6 py-4">
                        {" "}
                        {student.Alcohol == true && "Alcohol"}{" "}
                        {student.Internet == true && "Internet"}{" "}
                        {student.Marijuana == true && "Marijuana"}{" "}
                        {student.HardDrugs == true && "Hard Drugs"}{" "}
                        {student.Smoking == true && "Smoking"}
                        {""}
                      </td>
                    </tr>
                  );
                })}

                {/* <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Benjamin Collins
                  </th>
                  <td class="px-6 py-4">
                    Massachusetts Institute of Technology
                  </td>
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
                  <td class="px-6 py-4">
                    Massachusetts Institute of Technology
                  </td>
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
                  <td class="px-6 py-4">
                    Massachusetts Institute of Technology
                  </td>
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
                  <td class="px-6 py-4">
                    Massachusetts Institute of Technology
                  </td>
                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    campbell@gmail.com
                  </td>
                  <td class="px-6 py-4">(+91) 123-4567</td>
                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">18</td>
                  <td class="px-6 py-4">Kerala</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </main>
        {/* <Banner /> */}
        {/* <Footer /> */}
      </div>
    );
  }
};

export default Home;
