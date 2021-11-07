import axios from "axios";

export const usersAPI = {
  getPizzas() {
    return axios.get(`http://localhost:3000/db.json`).then((response) => {
      return response.data.pizzas;
    });
  },
};
