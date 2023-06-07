import Header from "@/components/Header";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useEffect, useState } from "react";

const App = () => {
  const [coordinates, setCoordinates] = useState([]);
  const getCoordinates = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/coordinates", {
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setCoordinates(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAJPA1h5SH9L4yAVdZiqij9RypHjf2tieQ",
  });

  if (!isLoaded) return <div>Loading..</div>;
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  // if (!isLoaded) return <div>Loading...</div>;
  return <Map coordinates={coordinates} />;
};

const Map = ({ coordinates }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <GoogleMap
          zoom={12}
          center={{ lat: 19.212292, lng: 72.875397 }}
          mapContainerClassName="w-[90%] mx-auto h-[85vh] mt-20"
        >
          {coordinates.map((coords) => {
            const { lat, lng } = coords;
            return <Marker position={{ lat, lng }} />;
          })}
        </GoogleMap>
      </main>
      {/* <Banner /> */}
    </div>
  );
};

export default App;
