<template>
    <div class="auth row h-100">
        <div class="col-12 col-md-6 col-lg-4 p-0 ml-0 col py-4">
            <div class="h-100 px-4">
                <div>
                    <Logo />
                </div>
                <div>
                    <h3 class="mt-5 mb-4 font-weight-bolder">Ingresá a tu cuenta</h3>
                    <LoginForm />
                </div>
            </div>
            
        </div>
        <div class="col-lg-8 col-md-6 d-none d-md-block p-0 col">
            <div class="vh-100">
                <img class="vh-100 position-relative vw-img" src="../assets/login_image.png" />
            </div>
        </div>

    </div>
</template>

<script>
import Logo from '../components/Logo'
import LoginForm from '../components/LoginForm' 

export default {
    components:{Logo,LoginForm},
    name: 'Login'
}
</script>
 