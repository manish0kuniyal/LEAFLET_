const apiKey='NW2IF9OGR8MQ32DR'

const symbol = 'GOOGL';
const url = `https://trefle.io/api/v1/genus?token=fm2KzkGw3Nu6f37JWIT66aD0YIucNl6DvFJr2izVBaY`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Process the received data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });
  const latestDate = data['Meta Data']['3. Last Refreshed'];
  const latestPrice = data['Time Series (Daily)'][latestDate]['4. close'];
  console.log(`Latest closing price: ${latestPrice}`);