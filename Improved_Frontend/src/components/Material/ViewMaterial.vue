<template>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Material Name</th>
                        <th>Material Details</th>
                        <th>Material Amount</th>
                        <th>Material Status</th>
                        <th>Material Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="material in materials" :key="material.material_id">
                        <td>{{ material.material_name }}</td>
                        <td>{{ material.material_information }}</td>
                        <td>{{ material.material_item_number }}</td>
                        <td>{{ material.material_status_type }}</td>
                        <td>{{ material.material_description_type}}</td>
                        <td>
                            <router-link :to="{name: 'editMaterial', params: { id: material.material_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                            


                        <button @click.prevent="deleteMaterial(materials.material_id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                materials: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/materials';
            axios.get(apiURL).then(res => {
                this.materials = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteMaterial(id){
                console.log(id)
                let apiURL = `http://localhost:27017/material/${id}`;
                let indexOfArrayItem = this.materials.findIndex(i => i.material_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.materials.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>



<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
