import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";

export const useSignup = async (name, email, password) => {
    const error = ref(null);
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        if(!user) throw new Error("Невозможно провести регистрацию");

        await updateProfile(user, {displayName: name});
        return user;
    }
    catch(err) {
        error.value = err.message;
        return error
    }
};
