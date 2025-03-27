import { TrueAuth } from 'true-auth-sdk';

const authClient = new TrueAuth({
    sharedSecret: process.env.TRUE_SHARED_SECRET
});

async function getAuthToken() {
    try {
        return await authClient.getToken();
    } catch (error) {
        console.error("Error obteniendo token de autenticación:", error);
        throw error;
    }
}

export { getAuthToken };
