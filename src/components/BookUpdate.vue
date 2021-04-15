<template>
    <div id="book-update">
        
        <form  @submit.prevent="handleSubmit">
            <h3>Wprowadz id ksiazki do zmiany danych</h3>
            <label>Id</label>
            <input v-model="book.id" type="text" 
            :class="{ 'has-error': submitting && invalidId }" 
            @focus="clearStatus"
            @keypress="clearStatus" 
            />

            <h3>Wprowadz nowe dane dla podanego id ksiazki</h3>
            <label>Tytuł</label>
            <input v-model="book.title" type="text" 
            :class="{ 'has-error': submitting && invalidTitle }" 
            @focus="clearStatus"
            @keypress="clearStatus" 
            />

            <label>Author</label>
            <input v-model="book.authorId" type="text" 
            :class="{ 'has-error': submitting && invalidAuthorId }"
            @focus="clearStatus"
            @keypress="clearStatus"
            />
            
            <label>Liczba stron</label>
            <input v-model="book.pages" type="text" 
            :class="{ 'has-error': submitting && invalidPages }"
            @focus="clearStatus"
            @keypress="clearStatus"
            />

            <p v-if="error && submitting" class="error-message">
            Proszę wypełnić wskazane pola formularza
            </p>
            <p v-if="success" class="success-message">
            Dane poprawnie zapisano
            </p>

            <button>Edytuj ksiazke</button>
        </form>


        


    </div>
</template>

<script>
import axios from "axios"

 export default {
    name: 'book-form',
    data() {
        return {
            submitting: false,
            error: false,
            success: false, 
            book: {
                id:'',
                title: '',
                authorId: '',
                pages: '',
            },
        }
    },
    methods: {
        
        async updateBook(book){
                    alert(JSON.stringify(book))
                    const res = await axios.post("http://localhost:8080/post/book/update", book)
                    alert(res.status)
        },
        
        handleSubmit() {

            this.submitting = true
            this.clearStatus()
            //check form fields
            if (this.invalidId && (this.invalidTitle || this.invalidAuthorId || this.invalidPages)) {
                this.error = true
                return
            }


            this.updateBook( this.book) 
            console.log('uruchomiono handleSubmit')

            //clear form fields
            this.book= {
                title: '',
                authorId: '',
                pages: '',
            }
             
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
            return this.book.title === ''
        },
        invalidTitle() {
            return this.book.title === ''
        },
        invalidAuthorId() {
            return this.book.authorId === ''
        },
        invalidPages() {
            return this.book.pages === ''
        },
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