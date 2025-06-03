import { API_URL } from '@/config/constants';
import type { ApiResponse } from '@/types/api-response';
import type { BankAccount } from '@/types/bankAccounts';
import Axios from '@/config/api';

export async function fetchBankAccounts(): Promise<BankAccount[]> {
    const response = await Axios.get<ApiResponse<BankAccount[]>>(`${API_URL}/bank-accounts`);
    return response.data.data;
}

