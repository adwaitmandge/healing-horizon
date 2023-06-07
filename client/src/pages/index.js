import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import FeaturesHome from "../components/Features";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import platform from "platform";
import { UserState } from "@/UserProvider";
console.log(platform);

const Home = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [userAgent, setUserAgent] = useState("");
  const { user } = UserState();

  const successCallback = async (position) => {
    console.log(position.coords);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    if (!userAgent) return;
    console.log("About to send the request");
    const body = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      userAgent: userAgent,
    };
    console.log("The body is ", body);

    try {
      const res = await fetch(
        "http://localhost:5000/api/student/marklocation",
        {
          headers: {
            "Content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(body),
        }
      );

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  useEffect(() => {
    setUserAgent(navigator.userAgent);
    setHasMounted(true);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, [userAgent]);

  if (!hasMounted) return null;

  const submitHandler = async () => {
    console.log("The entered data is ");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>
      {/* <Banner /> */}
      <Footer />
    </div>
  );
};

export default Home;
