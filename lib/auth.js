import TrueAuth from 'true-auth-sdk'; // Importar el SDK de TrueAuth como dependencia

export const getAuthToken = async () => {
  try {
    const token = await TrueAuth.getToken();
    return token;
  } catch (error) {
    throw new Error('Error obteniendo token de autenticación: ' + error.message);
  }
};
