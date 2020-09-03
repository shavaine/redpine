<template>
    <v-container class="homepage py-0" fluid>
        <!--    Banner-->
        <v-row class="grey lighten-3 banner hero-image" justify="center" align-content="center">
            <v-row
                    class="fill-height caro-gradient "
                    align="center"
                    justify="center"
            >
                <div class="display-2 font-weight-medium white--text">Login</div>
            </v-row>
        </v-row>
        <!--    banner-->
        <v-container class="fill-height my-16" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                        <v-toolbar color="#7f0000" dark flat>
                            <v-toolbar-title>Admin Login</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form @submit.prevent="login">
                                <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        required
                                        prepend-icon="mdi-account"
                                        type="text"
                                        label="Email"
                                ></v-text-field>
                                <v-text-field
                                        v-model="password"
                                        :rules="passwordRules"
                                        label="Password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                        required
                                ></v-text-field>
                                <v-btn type="submit" color="#7f0000" dark class="mt-3">Login</v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>

</template>

<script>
    import Firebase from "firebase/app";
    import 'firebase/auth';

    export default {
        name: "Login",
        data: () => ({
            email: '',
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }),
        methods: {
            login: function() {
                const info = {
                    email: this.email,
                    password: this.password
                };

                Firebase.auth()
                .signInWithEmailAndPassword(info.email, info.password)
                .then(
                    ()=> {
                        this.$router.push("admin")
                    }, error => {
                        this.error = error.message;
                    }
                )
            }
        }
    }

</script>

<style scoped>
    .banner {
        height: 250px;
    }
    .hero-image {
        background-image: url("../assets/images/Pillows.jpg"); /* The image used */
        background-color: #cccccc; /* Used if the image is unavailable */
        height: 250px; /* You must set a specified height */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
    }
    .caro-gradient{
        background: rgb(46,41,41);
        background: linear-gradient(90deg, rgba(46,41,41,0.6362920168067228) 100%, rgba(46,41,41,1) 100%, rgba(46,41,41,1) 100%);
    }
</style>