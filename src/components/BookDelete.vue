<template>
    <div id="book-delete">
        <h3>form</h3>
        <form  @submit.prevent="handleSubmit">
            <label>Id</label>
            <input v-model="id" type="text" 
            :class="{ 'has-error': submitting && invalidId }" 
            @focus="clearStatus"
            @keypress="clearStatus" 
            />

            <p v-if="error && submitting" class="error-message">
            Proszę wypełnić wskazane pola formularza
            </p>
            <p v-if="success" class="success-message">
            Dane poprawnie zapisano
            </p>

            <button>Usuń ksiazke</button>
        </form>


        


    </div>
</template>

<script>
import axios from "axios"

 export default {
    name: 'book-delete',
    data() {
        return {
            submitting: false,
            error: false,
            success: false, 
            id:''
        }
    },
    methods: {
        
        async removeBook(id){
            const res = await axios.delete("http://localhost:8080/delete/book/"+id)
            alert(res.status==200 || res.status==201 ? "Succes" : "Error: " + res.status)
        },
        handleSubmit() {

            this.submitting = true
            this.clearStatus()
            //check form fields
            if (this.invalidTitle) {
                this.error = true
                return
            }


            this.removeBook( this.id) 
            console.log('uruchomiono handleSubmit')

            //clear form fields
            this.id= ''
            
             
            this.error = false
            this.success = true
            this.submitting = false
        },
        clearStatus() {
            this.success = false
            this.error = false
        }, 

    }, 
    computed: {
        invalidId() {
            return this.id === ''
        }
    }, 
 }
</script>

<style scoped>
    form {
        margin-bottom: 2rem;
    }
     [class*='-message'] {
        font-weight: 500;
    }
    .error-message {
        color: #d33c40;
    }
    .success-message {
        color: #32a95d;
    } 
</style>
