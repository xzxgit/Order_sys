<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <app-new-pizza></app-new-pizza>
        </div>
        <div class="sm-12 col-md-4">
            <h3 class="text-muted my-5">Menu</h3>
            <table class="table table-default">
                <thead>
                    <tr>
                        <th>Category</th>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>sadad</td>
                        <td>
                            <button class="btn btn-sm btn-outline-danger">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import NewPizza from './NewPizza.vue'
export default {
    components: {
        'app-new-pizza': NewPizza
    }
}
</script>
