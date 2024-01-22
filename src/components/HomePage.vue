<template>
    <section class="homepage">
        <HeaderBar />
        <button class="logout-btn" v-on:click="sign_out()">Logout</button>
    </section>
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

/* CSS */
.logout-btn {
    all: unset;
    width: 100px;
    height: 30px;
    font-size: 16px;
    background: transparent;
    border: none;
    position: relative;
    color: #f0f0f0;
    cursor: pointer;
    z-index: 1;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.logout-btn::after,
.logout-btn::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all .4s;
}

.logout-btn::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 10px;
}

.logout-btn::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
}

.logout-btn:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
}

.logout-btn:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
}

.logout-btn:active::after {
    transition: 0s;
    transform: translate(0, 5%);
}
</style>

<script>
import HeaderBar from './HeaderBar.vue'
export default {
    name: 'HomePage',
    components: {
        HeaderBar,
    },
    mounted() {
        let user = localStorage.getItem("user-info")
        if (!user) {
            this.$router.push({ name: 'Login' })
        } else {
            // Assuming your JSON structure includes a 'fullName' field for each user
            let fullName = user.fullName;

            // Update the welcome message with the user's full name
            this.$nextTick(() => {
                document.querySelector('h1').innerText = `Welcome, ${fullName}!`;
            });
        }
    },
    methods: {
        sign_out() {
            let user = localStorage.getItem("user-info")
            if (user) {
                localStorage.clear()
                window.location.reload()
            }
        }
    }
}
</script>