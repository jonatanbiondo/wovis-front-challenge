<template>
<div>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)" >
            <div class="mb-3">
                <ValidationProvider ref="providerUsername" name="E-mail" rules="required|email" v-slot="{ errors }">
                    <label for="email" class="form-label">Email</label>
                    <input 
                        v-model="email"
                        type="email" 
                        class="form-control form-control-lg" 
                        id="email" 
                        placeholder="nombre@example.com"
                        :class="{'is-invalid':errors[0]}"
                    > 
                    <div class="invalid-feedback" :class="{'was-validated':errors[0]}">
                        {{ errors[0] }}
                    </div>                                     
                </ValidationProvider>
            </div> 
            <div class="mb-3">
                <ValidationProvider ref="providerPassword" name="Password" rules="required|min:6" v-slot="{ errors }">
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
                    <button type="submit" class="btn btn-primary" :disabled="loading">
                        <span v-if="!loading">
                            Ingresar a mi cuenta
                        </span>
                        <span v-if="loading">
                            <span 
                                class="spinner-border 
                                spinner-border-sm" 
                                role="status" 
                                aria-hidden="true">
                            </span>
                            Ingresando...
                        </span>
                    </button>
                    <div 
                        v-if="message" 
                        class="alert" 
                        :class="{'alert-success':  msg_type == 'alert-success' ,'alert-danger': msg_type == 'alert-danger'  }"
                        role="alert"
                    >
                    {{message}}
                    </div>
                </div>
            </div> 
        </form>
    </ValidationObserver>
</div>
</template>

<script>

import Vue from 'vue';
import { ValidationProvider,ValidationObserver } from 'vee-validate';
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
import { extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
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
// Override the default message.
extend('min', {
    ...min,
  message: 'El campo requiere {length} caracteres como mínimo'
});

import {doLogin} from '../service/auth'
export default {
    data: () => ({
        loading:false,
        email:'',
        password:'',
        message:'',
        msg_type:'alert-success',
    }),
    methods:{
        async onSubmit(){
            this.loading = true
            const data =   await doLogin(this.email, this.password)
            console.log(data);
            if(data.success){
                this.message = "Usuario logueado correctamente";
                this.msg_type = 'alert-success'
            }else{
                this.message = "Ocurrio un error:"  + data.message;
                this.msg_type = 'alert-danger'
            }
            this.loading = false
             
        }
    }
}
</script>