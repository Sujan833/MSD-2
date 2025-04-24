function getRandomPrice() {
    return Math.floor(Math.random() * 101) + 50;
    }
    function simulateStockPrice() {
    return new Promise((resolve, reject) => {
    let count = 0;
    const intervalId = setInterval(() => {
    if (count < 5) {
    const price = getRandomPrice();
    console.log(`Stock price: $${price}`);
    count++;
    } else {
    clearInterval(intervalId);
    resolve('Simulation completed.');
    }
    }, 3000);
    });
    }
    simulateStockPrice()
    .then((response) => {
    console.log(response);
    })
    .catch((error) => {
    console.error(error);
    });
