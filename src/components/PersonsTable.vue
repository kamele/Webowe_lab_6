<template>
    <div id="persons-table">
        <table>
            <thead>
                <tr>
                    <th>Imię i nazwisko</th>
                    <th>email</th>
                    <th>telefon</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in personsSource" :key="person.id">
                    <td>{{ person.name }}</td>
                    <td>{{ person.email }}</td>
                    <td>{{ person.phone }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'persons-table',
        props: {
        personsSource: Array,
        }, 
        methods:{
            async getPersons() {
                try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                this.personsSource = data
                } catch (error) {
                console.error(error)
                }
            }, 
        },
        mounted() {
            this.getPersons()
        }, 
    }
</script>

<style scoped></style>
