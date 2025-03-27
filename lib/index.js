// lib/index.js
import { postPDF, getPDF as fetchPDF } from './apiClient.js';
/**
 * Crea un PDF a partir de un template y datos.
 * @param {string} template - Nombre del template.
 * @param {Object} data - Datos para rellenar el template.
 * @param {Object} [assets] - Activos opcionales, como logos.
 * @returns {Promise<Object>} - Objeto con el ID y URL del PDF.
 */
export const createPDF = async (template, data, assets = {}) => {
  const payload = { template, data, assets };
  return await postPDF(payload);
};

/**
 * Recupera un PDF ya generado por su ID.
 * @param {string} id - Identificador único del PDF.
 * @returns {Promise<Object>} - Objeto con el ID y URL del PDF.
 */
export const getPDF = async (id) => {
  return await fetchPDF({ id });
};

export default {
  createPDF,
  getPDF,
};
