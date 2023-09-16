const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');
const currencyName = document.getElementById('currency-name');
const currencyImage = document.querySelector('.currency-img');
const currencyValueConverted = document.querySelector('.currency-value');

convertButton.addEventListener('click', convertValues);
currencySelect.addEventListener('change', updateCurrencyNameAndImage);

function updateCurrencyNameAndImage() {
    const selectedCurrency = currencySelect.value;
    switch (selectedCurrency) {
      case 'bitcoin':
        currencyName.textContent = 'Bitcoin (BTC)';
        currencyImage.src = './assets/bitcoin.png';
        break;
      case 'ethereum':
        currencyName.textContent = 'Ethereum (ETH)';
        currencyImage.src = './assets/eth.png';
        break;
      case 'cardano':
        currencyName.textContent = 'Cardano (ADA)';
        currencyImage.src = './assets/cardano.png';
        break;
      case 'dogecoin':
        currencyName.textContent = 'Dogecoin (DOGE)';
        currencyImage.src = './assets/doge.png'; // Corrigido o nome do arquivo
        break;
      case 'monero':
        currencyName.textContent = 'Monero (XMR)';
        currencyImage.src = './assets/monero.png';
        break;
    }
  }
  

function convertValues() {
  const inputCurrencyValue = parseFloat(document.querySelector('.input-currency').value);
  const selectedCurrency = currencySelect.value;

  axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${selectedCurrency}&vs_currencies=brl`)
    .then(function (response) {
      const exchangeRate = response.data[selectedCurrency].brl;
      const convertedValue = inputCurrencyValue * exchangeRate;
      currencyValueConverted.textContent = `R$ ${convertedValue.toFixed(2)}`;
    })
    .catch(function (error) {
      console.error(error);
      currencyValueConverted.textContent = 'Erro ao obter a taxa de câmbio.';
    });
}
