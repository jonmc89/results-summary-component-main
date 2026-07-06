const numScore = document.querySelectorAll('.summary-item-score');

fetch('data.json')
  .then((response) => {
    if (response.ok) {
      console.log('Success');
      return response.json();
    } else {
      console.log('Error');
      throw new Error('Failed to fetch data');
    }
  })
  .then((data) => {
    console.log(data);

    numScore.forEach((item, index) => {
      item.textContent = data[index].score;
    });
  })
  .catch((error) => {
    console.error(error);
  });
