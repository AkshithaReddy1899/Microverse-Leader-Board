const Api = () => {
  fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Awefsrgfx/scores")
  .then(response => response.json())
  .then(jsonData => console.log(jsonData));
}

export default Api;