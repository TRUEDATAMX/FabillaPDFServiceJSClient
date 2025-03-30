const axios = require('axios');
const { TrueAuth } = require('true-auth-sdk-js');
require('dotenv').config();

class PDFserviceclient {
  constructor(options = {}) {
    this.pdfServiceUrl = options.pdfServiceUrl || process.env.FABILLA_PDF_SERVICE_URL;
    this.audience = options.audience || process.env.AUDIENCE;
    this.auth = new TrueAuth();
  }

  /**
   * @param {Object} params - Objeto con template, data y assets.
   * @param {string} params.template
   * @param {Object} params.data
   * @param {Object} params.assets 
   * @returns {Promise<Object>} - service response
   */
  async createPDF({ template, data, assets }) {
    const token = this.auth.token(this.audience);
    const payload = { template, data, assets };

    try {
      const response = await axios.post(
        this.pdfServiceUrl,
        payload,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response ? JSON.stringify(error.response.data) : error.message
      );
    }
  }
}

module.exports = PDFserviceclient;
