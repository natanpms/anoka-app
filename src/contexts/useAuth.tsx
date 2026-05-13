import { createContext, useContext, useEffect, useState } from "react";
import { UserProfile } from "../types";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { publicApi } from "../services/api";

type UserContextType = {
    user: UserProfile | null;
    accessToken: string | null;
    signOut: () => Promise<void>;
    register: (data: { name: string; email: string; password: string; }) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    isLoggedIn: () => boolean;
    loading: boolean;
};

type Props = {
    children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const router = useRouter();

    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function verifyUser() {
            const accessToken = await SecureStore.getItemAsync("accessToken");
            const userProfile = await SecureStore.getItemAsync("userProfile");

            if (accessToken && userProfile) {
                setAccessToken(accessToken);
                setUser(JSON.parse(userProfile));
            }

            setLoading(false);

        }

        verifyUser();
    }, []);

    const isLoggedIn = () => {
        return !!accessToken;
    };

    const signOut = async () => {
        await SecureStore.deleteItemAsync("accessToken");
        await SecureStore.deleteItemAsync("refreshToken");

        setAccessToken(null);
        setUser(null);

        router.replace("/login");
    };

    const login = async (email: string, password: string) => {

    };

    const register = async (data: { name: string; email: string; password: string; }) => {
        const response = await publicApi.post("/users", data);

        console.log("User registrado:", response.data);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                accessToken,
                signOut,
                register,
                login,
                isLoggedIn,
                loading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(UserContext);
};