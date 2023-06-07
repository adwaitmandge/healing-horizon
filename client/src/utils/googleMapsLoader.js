import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyAJPA1h5SH9L4yAVdZiqij9RypHjf2tieQ",
  version: "weekly",
  libraries: ["places"],
});
export default loader;
