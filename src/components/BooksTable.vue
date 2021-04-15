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
    export default {
        name: 'books-table',
        props: {
        booksSource: Array,
        },
    }
</script>

<style scoped></style>