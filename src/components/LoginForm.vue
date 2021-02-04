<template>
<div>
    <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)" >
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
                <ValidationProvider name="Password" rules="required|min:6" v-slot="{ errors }">
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
                    <button type="submit"  class="btn btn-primary">
                        Ingresar a mi cuenta
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

import {doLogin} from '../service/auth'

export default {
    data: () => ({
        email:'',
        password:'',
        message:'',
        msg_type:'alert-success',
    }),
    methods:{
        async onSubmit(){
            const data =   await doLogin(this.email, this.password)
             
            if(data.success){
                this.message = "Usuario logueado correctamente";
                this.msg_type = 'alert-success'
            }else{
                this.message = "Ocurrio un error:"  + data.message;
                this.msg_type = 'alert-danger'
            }
             
        }
    }
}
</script>