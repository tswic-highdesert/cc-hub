import axios from 'axios';

export const getAccessToken = async (): Promise<string | null> => {
  try {
    console.log('[Auth] Requesting access token...');

    const res = await axios.post('https://api.archieapp.co/v1/authenticate', {
      client_id: import.meta.env.VITE_ARCHIE_CLIENT_ID,
      client_secret: import.meta.env.VITE_ARCHIE_CLIENT_SECRET,
    });

    console.log('[Auth] Token received:', res.data.access_token.slice(0, 25) + '...');

    return res.data.access_token;
  } catch (error) {
    console.error('[Auth] Failed to get Archie access token:', error);
    return null;
  }
};
