import axios from "axios";
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, password) => {
    return axios.post("api/signup", { username, password });
  },
  search: function () {
    const BASEURL = "https://www.balldontlie.io/api/v1/season_averages?player_ids[]=6&player_ids[]=274&player_ids[]=15&player_ids[]=237&player_ids[]=192&player_ids[]=115&player_ids[]=145&player_ids[]=246&player_ids[]=472&player_ids[]=278&player_ids[]=228&player_ids[]=172&player_ids[]=447&player_ids[]=79&player_ids[]=417&player_ids[]=176&player_ids[]=189&player_ids[]=37&player_ids[]=357&player_ids[]=465&player_ids[]=214&player_ids[]=405&player_ids[]=132&player_ids[]=460&player_ids[]=104&player_ids[]=322&player_ids[]=57&player_ids[]=125&player_ids[]=367&player_ids[]=286&player_ids[]=416&player_ids[]=434&player_ids[]=185&player_ids[]=200&player_ids[]=378&player_ids[]=3&player_ids[]=268&player_ids[]=303&player_ids[]=285&player_ids[]=387&player_ids[]=315&player_ids[]=265&player_ids[]=161&player_ids[]=335&player_ids[]=490&player_ids[]=167&player_ids[]=54&player_ids[]=666969";
    const APIKEY = "&api_key=kvydgkf6qdjye5y3xrt464xp";
    return axios.get(BASEURL + APIKEY);

  },
};



