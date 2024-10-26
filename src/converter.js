import React, { useState } from 'react';
import './App.css';

function CurrencyConverter() {
    // State to hold the input amount, selected currencies, and converted amount
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(0);

    // Mock exchange rates (you could replace this with an API call)
    const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.75, JPY: 110.0, AUD: 1.35, CAD: 1.25, CHF: 0.93, CNY: 6.45, INR: 74.0, MXN: 20.0, SGD: 1.36 },
        EUR: { USD: 1.18, GBP: 0.88, JPY: 130.0, AUD: 1.59, CAD: 1.47, CHF: 1.09, CNY: 7.60, INR: 87.0, MXN: 23.5, SGD: 1.60 },
        GBP: { USD: 1.33, EUR: 1.14, JPY: 148.0, AUD: 1.81, CAD: 1.62, CHF: 1.45, CNY: 8.60, INR: 100.0, MXN: 29.0, SGD: 1.75 },
        JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, AUD: 0.0135, CAD: 0.0127, CHF: 0.0070, CNY: 0.049, INR: 0.67, MXN: 0.15, SGD: 0.0126 },
        AUD: { USD: 0.74, EUR: 0.63, GBP: 0.55, JPY: 74.0, CAD: 0.93, CHF: 0.69, CNY: 4.80, INR: 54.0, MXN: 15.0, SGD: 0.80 },
        CAD: { USD: 0.80, EUR: 0.68, GBP: 0.61, JPY: 83.0, AUD: 1.07, CHF: 0.73, CNY: 5.20, INR: 60.0, MXN: 16.0, SGD: 0.85 },
        CHF: { USD: 1.08, EUR: 0.92, GBP: 0.69, JPY: 141.0, AUD: 1.45, CAD: 1.37, CNY: 6.90, INR: 75.0, MXN: 21.0, SGD: 1.50 },
        CNY: { USD: 0.15, EUR: 0.13, GBP: 0.12, JPY: 20.0, AUD: 0.21, CAD: 0.19, CHF: 0.14, INR: 11.5, MXN: 3.1, SGD: 0.17 },
        INR: { USD: 0.013, EUR: 0.011, GBP: 0.01, JPY: 1.5, AUD: 0.0185, CAD: 0.017, CHF: 0.0135, CNY: 0.087, MXN: 0.27, SGD: 0.015 },
        MXN: { USD: 0.05, EUR: 0.04, GBP: 0.034, JPY: 6.8, AUD: 0.067, CAD: 0.061, CHF: 0.047, CNY: 0.32, INR: 3.7, SGD: 0.06 },
        SGD: { USD: 0.74, EUR: 0.63, GBP: 0.55, JPY: 80.0, AUD: 1.24, CAD: 1.17, CHF: 0.67, CNY: 4.45, INR: 59.0, MXN: 16.5 },
    };

    // Function to handle conversion
    const convertCurrency = () => {
        const rate = exchangeRates[fromCurrency][toCurrency];
        setConvertedAmount((amount * rate).toFixed(2));
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
            <h2>Currency Converter</h2>

            {/* Section to enter the amount and choose the currency */}
            <div>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        style={{ margin: '10px', padding: '5px', width: '100%' }}
                    />
                </label>
                <label>
                    From:
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        style={{ margin: '10px', padding: '5px', width: '100%' }}
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    To:
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        style={{ margin: '10px', padding: '5px', width: '100%' }}
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </label>
                <button onClick={convertCurrency} style={{ padding: '10px 20px', marginTop: '10px' }}>
                    Convert
                </button>
            </div>

            {/* Section to display the converted amount */}
            <div style={{ marginTop: '20px' }}>
                <h3>Converted Amount: {convertedAmount} {toCurrency}</h3>
            </div>
        </div>
    );
}

export default CurrencyConverter;
