import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);

        if(!user) throw new Error("Невозможно провести авторизацию");

        return user
    } catch (err) {
        throw new Error(err.message)
    }
};
