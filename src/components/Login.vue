<template>
    <div class="login">
        <img class="logo" src="../assets/logo2.png" />
        <h1>Login</h1>
        <input type="text" v-model="email" placeholder="Enter your email address" required>
        <input type="password" v-model="password" placeholder="Enter your pasword" required>
        <label for="vehicle1">Remeber me </label><br>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
        <button class="LoginBtn" v-on:click="login()">Login</button>
        <p>I don't have an account? <a href="/signup">Sign-Up</a></p>
    </div>
</template>

<style>
h1 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.login {
    justify-content: center;
    text-align: center;
    padding: 19px;
    margin: 0;
}

.login .logo {
    width: 150px;
}

.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid rgb(43, 60, 66);
}

.login .LoginBtn {
    cursor: pointer;
    width: 320px;
    height: 40px;
    border: #2c3e50;
    background-color: #1f618d;
    color: #fff;
}

.login .LoginBtn:hover {
    opacity: 0.5s;
    background: #24303b;
    transition: 0.5s;
}

.login .LoginBtn:active {
    background-color: #404c58;
}
</style>

<script>
import axios from 'axios';
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`, {
                email: this.email,
                password: this.password
            })

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'Home' })
                alert("Logged in sucessfull :)")
            } else {
                alert("Incorrect username or password!")
            }
            console.warn(result);
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info")
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }

};
</script>
