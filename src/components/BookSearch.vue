<template>
    <div id="books-search">
        <table>
            <thead>
                <tr>
                    <th>Tytuł</th>
                    <th>author Id</th>
                    <th>pages</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ book.title }}</td>
                    <td>{{ book.authorId }}</td>
                    <td>{{ book.pages }}</td>
                </tr>
            </tbody>
        </table>
        <div id="book-form">
        <form  @submit.prevent="handleSubmit">
            <label>Id</label>
            <input v-model="id" type="text" 
            :class="{ 'has-error': submitting && invalidTitle }" 
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
    export default {
        name: 'books-search',
        props: {
            id,
            book,
        },
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
        handleSubmit() {

            this.submitting = true
            this.clearStatus()
            //check form fields
            if (this.invalidId) {
                this.error = true
                return
            } 

            this.$emit('add:book', this.book) 
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
        
    }, 


    }
</script>

<style scoped></style>