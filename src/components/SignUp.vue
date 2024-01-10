<template>
    <div class="sign-up">
        <img class="logo" src="../assets/logo2.png" />
        <h1>Sign Up</h1>

        <input type="text" v-model="email" placeholder="Enter your email address" required>
        <input type="text" v-model="name" placeholder="Enter your Full Name" required>
        <input type="password" v-model="password" placeholder="Enter your pasword" required>
        <button class="SignBtn" v-on:click="signUp">Sign Up</button>
        <p>Already have an account? <a href="/login">Login</a></p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data(){
        return {
            email:'',
            name:'',
            password:'',
        }
    },
    methods:{
        async signUp()
        {
            let result = await axios.post("http://localhost:3000/users", {
                email:this.email,
                name:this.name,
                password:this.password
            });

            console.warn(result);
            if(result.status==201){
                //localStorage.setItem("user-info", JSON.stringify(result.data))
                alert("Registered sucessfull :)")
            } else {
                alert("Registration failed :)")
            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem("user-info")
        if(user)
        {
            this.$router.push({name: 'Home'})
        }
    }
}

</script>

<style>
    h1 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }

    .sign-up{
        justify-content: center;
        text-align: center;
        padding: 19px;
        margin: 0;
    }
    .sign-up .logo{
        width: 150px;
    }

    .sign-up input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid rgb(43, 60, 66);
    }

    .sign-up .SignBtn{
        cursor: pointer;
        width: 320px;
        height: 40px;
        border: #2c3e50;
        background-color: #1f618d;
        color: #fff;
    }

    .sign-up .SignBtn:hover{
        opacity: 0.5s;
        background: #24303b;
        transition: 0.5s;
    }

    .sign-up .SignBtn:active{
        background-color: #404c58;
    }

</style>
