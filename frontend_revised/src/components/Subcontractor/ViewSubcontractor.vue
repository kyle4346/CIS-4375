<template>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Business Name</th>
                        <th>Rate/Time</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subcontractor in subcontractors" :key="subcontractor.subcontractor_id">
                        <td>{{ subcontractor.subcontractor_fname }}</td>
                        <td>{{ subcontractor.subcontractor_lname }}</td>
                        <td>{{ subcontractor.subcontractor_business_name }}</td>
                        <td>{{ subcontractor.subcontractor_rate }}</td>
                        <td>{{ subcontractor.subcontractor_phone}}</td>
                        <td>{{ subcontractor.subcontractor_email }}</td>
                        <td>{{ subcontractor.subcontractor_status }}</td>
                        <td>{{ subcontractor.subcontractor_type }}</td>
                        <td>
                            <router-link :to="{name: 'editSubcontractor', params: { id: subcontractor.subcontractor_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                            


                        <button @click.prevent="deleteSubcontractor(subcontractor.subcontractor_id)" class="btn btn-danger">Delete</button>
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
                subcontractors: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/subcontractors';
            axios.get(apiURL).then(res => {
                this.subcontractors = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteSubcontractor(id){
                console.log(id)
                let apiURL = `http://localhost:27017/subcontractor/${id}`;
                let indexOfArrayItem = this.subcontractors.findIndex(i => i.subcontractor_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.subcontractors.splice(indexOfArrayItem, 1);
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
