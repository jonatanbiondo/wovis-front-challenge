<template>
    <div class="row h-100">
        <div class="col-12 col-md-6 col-lg-4 p-0 ml-0 col py-4">
            <div class="h-100 px-4">
                <div>
                    <Logo />
                </div>
                <div>
                    <h3 class="mt-5 mb-4 font-weight-bolder">Ingresá a tu cuenta</h3>
                    <ValidationObserver  >
                        <form v-on:submit.prevent="onSubmit" >
                            <div class="mb-3">
                                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                                    <label for="email" class="form-label">Email</label>
                                    <input 
                                        v-model="email"
                                        type="email" 
                                        class="form-control form-control-lg" 
                                        id="email" 
                                        placeholder="nombre@example.com"
                                         :class="{'is-invalid':errors[0]}"
                                    > 
                                    <div  class="invalid-feedback" :class="{'was-validated':errors[0]}">
                                        {{ errors[0] }}
                                    </div>                                     
                                </ValidationProvider>
                            </div> 
                            <div class="mb-3">
                                <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
                                    <label for="password" class="form-label">Contraseña</label>
                                    <input 
                                        v-model="password"
                                        type="password" 
                                        class="form-control form-control-lg" 
                                        id="password"
                                        placeholder="Ingresá tu contraseña"
                                         :class="{'is-invalid':errors[0]}"
                                    >
                                    <div  class="invalid-feedback" :class="{'was-validated':errors[0]}">
                                        {{ errors[0] }}
                                    </div>
                                </ValidationProvider>
                            </div> 
                            <div class="pl-0 mt-2 mb-2 link-decoration">
                                <a class="text-reset" href="#">¿Olvidaste tu contraseña?</a>
                            </div> 
                            <div class="mb-3">
                                <div class="d-grid gap-2">
                                    <button  class="btn btn-primary">
                                        Ingresar a mi cuenta
                                    </button>
                                </div>
                            </div> 
                        </form>
                    </ValidationObserver>
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
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
// Override the default message.
extend('required', {
  ...required,
  message: 'Este campo es requerido'
});

// Override the default message.
extend('email', {
  ...email,
  message: 'El email ingresado no es correcto.'
});


export default {
    components:{Logo},
    name: 'Login',

    data: () => ({
        email:'',
        password:''
    }),
    methods:{
        onSubmit(){
            
             
        }
    }
}
</script>

 
