import { currencies } from './currencies.js';
const endpoint = 'https://api.exchangeratesapi.io/latest';

const form = document.querySelector('.convert-form');
const fromSelect = document.querySelector('.to-select');
const fromInput = document.querySelector('from-input');
const toSelect = document.querySelector('.from-select');
const toEl = document.querySelector('to-amount');

function createOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value='${currencyCode}'>${currencyCode} - ${currencyName}</option>`
    )
    .join('');
}

const optionsHtml = createOptions(currencies);

fromSelect.innerHTML = optionsHtml;
toSelect.innerHTML = optionsHtml;
