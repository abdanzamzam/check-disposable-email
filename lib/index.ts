import axios from "axios";

const KICKBOX_API_BASE_URL = 'https://open.kickbox.com/v1/disposable/';

export function isValidEmail(email: string) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
}


export async function isDisposableEmail(email: string): Promise<boolean> {
     try {
          const response = await axios.get(`${KICKBOX_API_BASE_URL}${email}`);
          return response.data.disposable;
     } catch (error) {
          return false;
     }
}
