<template>
    <div class="row h-100">
        <div class="col-12 col-md-6 col-lg-4 p-0 ml-0 col">
            <div class="h-100 col">
                <div>
                    <Logo />
                </div>
                <div>
                    <h3 class="  mt-5 mb-4 bolder">Ingresá a tu cuenta</h3>
                    <form>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="nombre@example.com">
                        </div> 
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña">
                        </div> 
                        <div class="pl-0 mt-2 mb-2 link-decoration">
                            <a href="#">Olvidaste tu contraseña</a>
                        </div> 
                        <div class="mb-3">
                             <button class="btn btn-primary"        >
                                Ingresar a mi cuenta
                             </button>
                        </div> 
                    </form>
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
import Logo from './Logo'
export default {
    components:{Logo},
    name: 'Login',
    props: {
        msg: String
    },
    methods:{
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
