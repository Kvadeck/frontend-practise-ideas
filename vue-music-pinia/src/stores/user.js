import { defineStore } from 'pinia'
import {auth, usersCollection} from "@/includes/firebase";


export const useUserStore = defineStore('user', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            userLoggedIn: false
        }
    },
    actions: {
        async register(values) {

            const userCred = await auth.createUserWithEmailAndPassword(
                values.email, values.password
            )

            await usersCollection.doc(userCred.user.uid).set({
                name: values.name,
                email: values.email,
                age: values.age,
                country: values.country
            })

            await userCred.user.updateProfile({
                displayName: values.name
            })

            this.userLoggedIn = true

        }
    }
})