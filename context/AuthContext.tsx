'use client';

import { User } from "@supabase/supabase-js";
import { createContext, useContext } from "react";

export interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    getUserData: () => Promise<void>;

}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
