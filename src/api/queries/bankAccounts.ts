import type { ApiResponse } from '@/types/api-response';
import type { BankAccount } from '@/types/bankAccounts';
import axios from 'axios';

const API_URL: string = import.meta.env.VITE_BACKEND_API_URL as string;
if (!API_URL) {
    throw new Error('VITE_BACKEND_API_URL is not defined');
}


export async function fetchBankAccounts(): Promise<BankAccount[]> {
    const response = await axios.get<ApiResponse<BankAccount[]>>(`${API_URL}/bank-accounts`);
    return response.data.data;
}

