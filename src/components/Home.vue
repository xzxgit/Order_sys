<template>
    <div>
        <h1>Home</h1>
        <button @click="gotoMenu" class="btn btn-success">Let's order!</button>
    </div>
</template>

<script>
export default {
    methods: {
        gotoMenu(){
            // this.$router.go(-1)
            // this.$router.replace('/menu')
            this.$router.replace({name: 'menuLink'})
        }
    }
}
</script>
