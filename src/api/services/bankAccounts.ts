import { useQuery } from '@tanstack/react-query';
import { fetchBankAccounts } from '../queries/bankAccounts';
import type { BankAccount } from '@/types/bankAccounts';


export const useFetchBankAccounts = () => {
    return useQuery<BankAccount[]>({
        queryKey: ['bank-accounts'],
        queryFn: fetchBankAccounts,
    });
};

