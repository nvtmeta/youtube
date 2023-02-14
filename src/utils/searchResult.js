const axios = require("axios");
const params = { q: ``, hl: "en", gl: "US" };
export const Opt = ({ searchTerm }) => {
  console.log(searchTerm);
  params.q = "see you";
  console.log(params);
  return <></>;
};

const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/search/",
  params: { q: `see you`, hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "01f80b8f2fmshf9668c06e6e8dbbp1d9ce7jsndb6b9ec228dc",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

let data = [];
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    data.push(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
console.log(data);
export default data;
