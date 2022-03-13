<template>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Project Num</th>
                        <th>Phase Num</th>
                        <th>Step Num</th>
                        <th>Step Name</th>
                        <th>Step Completed</th>
                        <th>Step Status</th>
                        <th>Step Cost</th>
                        <th>Step Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="step in steps" :key="step.step_id">
                        <td>{{ step.project_number }}</td>
                        <td>{{ step.phase_number }}</td>
                        <td>{{ step.step_number }}</td>
                        <td>{{ step.step_name }}</td>
                        <td>{{ step.step_completed }}</td>
                        <td>{{ step.step_status_type}}</td>
                        <td>{{ step.step_cost }}</td>
                        <td>{{ step.step_start_date }}</td>
                        <td>
                            <router-link :to="{name: 'editStep', params: { id: step.step_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                        <button @click.prevent="deleteStep(step.step_id)" class="btn btn-danger">Delete</button>

                            <br>
                            <br>
                            


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
                steps: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/steps';
            axios.get(apiURL).then(res => {
                this.steps = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteStep(id){
                console.log(id)
                let apiURL = `http://localhost:27017/step/${id}`;
                let indexOfArrayItem = this.steps.findIndex(i => i.step_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.steps.splice(indexOfArrayItem, 1);
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
