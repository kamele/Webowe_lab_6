<template>
    <div id="books-table">
        <table>
            <thead>
                <tr>
                    <th>Tytuł</th>
                    <th>author Id</th>
                    <th>pages</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in booksSource" :key="book.title">
                    <td>{{ book.title }}</td>
                    <td>{{ book.authorId }}</td>
                    <td>{{ book.pages }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios"

    export default {
        name: 'books-table',
        props: {
        booksSource: Array,
        },
        methods: {
            async fetchBooks(){
                console.log("start")
                const url = "http://localhost:8080/get/books";
                const res = await axios.get(url);
                const fetchedBooks = res.data;
                this.booksSource = fetchedBooks.map(b => ({
                    "id": b.id,
                    "title": b.title,
                    "authorId": b.authorId,
                    "pages": b.pages
                }))
                console.log(this.booksSource)
                },
        
        },
        mounted() {
             this.fetchBooks()
        },
    }
</script>

<style scoped></style>