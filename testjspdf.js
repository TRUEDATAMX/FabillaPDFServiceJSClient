const FabillaPDFClient = require('./lib/index.js');

// Define los parámetros para crear el PDF
const template = 'fabilla.html';
const data = { name: 'John Doe', amount: '100.00' };
const assets = { logo: 'truedata-logo.png' };

FabillaPDFClient.createPDF(template, data, assets)
  .then(response => {
    console.log('PDF generado:', response);
  })
  .catch(error => {
    console.error('Error generando PDF:', error);
  });
