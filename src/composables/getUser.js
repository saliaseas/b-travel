import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

const user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
    user.value = _user
})

export const getUser = () => {
    return { user }
};
