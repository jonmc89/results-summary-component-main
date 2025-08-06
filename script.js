fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Data is not available right now.");
    }
    return response.json();
  })
  .then((data) => {
    const reactionScore = data.find((item) => item.category === "Reaction");
    const memoryScore = data.find((item) => item.category === "Memory");
    const verbalScore = data.find((item) => item.category === "Verbal");
    const visualScore = data.find((item) => item.category === "Visual");
    document.getElementById("reactionScore").innerHTML = reactionScore.score;
    document.getElementById("memoryScore").innerHTML = memoryScore.score;
    document.getElementById("verbalScore").innerHTML = verbalScore.score;
    document.getElementById("visualScore").innerHTML = verbalScore.score;

    console.log("JSON data fetched!");
  })
  .then((error) => {
    console.error(error);
  });
