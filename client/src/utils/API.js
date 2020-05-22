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
  search: function (player1, player2) {
    const BASEURL = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player1}&player_ids[]=${player2}`;
    const APIKEY = "&api_key=kvydgkf6qdjye5y3xrt464xp";
    return axios.get(BASEURL + APIKEY);

  },

};



