const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
document.querySelector('.task3').addEventListener('click', (e) => {
    const makeTransaction = (transaction) => {
        const delay = randomIntegerFromInterval(200, 500);


        return new Promise((res, rej) => {
        
            setTimeout(() => {
                const canProcess = Math.random() > 0.3;
                if (canProcess) {
                    res(transaction.id, delay)
                } else {
                    rej(transaction.id)
                }
            }, delay);
        });
    };

    
    makeTransaction({ id: 70, amount: 150 })
        .then(logSuccess)
        .catch(logError);

    makeTransaction({ id: 71, amount: 230 })
        .then(logSuccess)
        .catch(logError);

    makeTransaction({ id: 72, amount: 75 })
        .then(logSuccess)
        .catch(logError);

    makeTransaction({ id: 73, amount: 100 })
        .then(logSuccess)
        .catch(logError);
    
 });

const logSuccess = (id, time) => {
    document.querySelector('.output').insertAdjacentHTML('beforeend', `<li class="green">Transaction ${id} processed in ${time}ms</li>`);

  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
    document.querySelector('.output').insertAdjacentHTML('beforeend', `<li class="red">Error processing transaction ${id}. Please try again later.</li>`);
    
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

document.querySelector('.reload').addEventListener('click', (e) => {
    window.location.reload()
});