function convertCurrency(){

    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const result = document.getElementById("result");

    fetch(`https://open.er-api.com/v6/latest/${from}`)
    .then(response => response.json())
    .then(data => {

        const rate = data.rates[to];
        const converted = amount * rate;

        result.innerHTML = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;

    })
    .catch(() => {

        result.innerHTML = "Error fetching exchange rates.";

    });

}