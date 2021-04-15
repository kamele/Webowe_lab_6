<template>
    <div id="book-form">
        <h3>Dodaj książke</h3>
        <form  @submit.prevent="handleSubmit">
            <h4>Wprowadź dane nowej książki</h4>
            <label>Tytuł</label>
            <input v-model="book.title" type="text" 
            :class="{ 'has-error': submitting && invalidTitle }" 
            @focus="clearStatus"
            @keypress="clearStatus" 
            />

            <label>Autor (id autora)</label>
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

            <button>Dodaj ksiazke</button>
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
                title: '',
                authorId: '',
                pages: '',
            },
        }
    },
    methods: {
        async fetchBooks(){
        const url = "http://localhost:8080/get/books";
        const res = await axios.get(url);
        const fetchedBooks = res.data;
        this.books = fetchedBooks.map(b => ({
            "id": b.id,
            "title": b.title,
            "authorId": b.authorId,
            "pages": b.pages
        }))
        console.log(this.books)
        },
        async addBook(book){
                    //alert(JSON.stringify(book))
                    const res = await axios.post("http://localhost:8080/post/book", book)
                    console.log(res.status)
        },
        async removeBook(book){
            const res = await axios.delete("http://localhost:8080/delete/book/"+book.id)
            alert(res.status==200 || res.status==201 ? "Succes" : "Error: " + res.status)
            this.books = this.books.filter(b => b.id != book.id)
        },
        handleSubmit() {

            this.submitting = true
            this.clearStatus()
            //check form fields
            if (this.invalidTitle || this.invalidAuthorId || this.invalidPages) {
                this.error = true
                return
            }


            this.addBook( this.book) 
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
