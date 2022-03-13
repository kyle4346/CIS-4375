<template>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Project Num</th>
                        <th>Phase Num</th>
                        <th>Phase Name</th>
                        <th>Phase Completed</th>
                        <th>Phase Status</th>
                        <th>Phase Cost</th>
                        <th>Phase Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="phase in phases" :key="phase.phase_id">
                        <td>{{ phase.project_number }}</td>
                        <td>{{ phase.phase_number }}</td>
                        <td>{{ phase.phase_name }}</td>
                        <td>{{ phase.phase_completed }}</td>
                        <td>{{ phase.phase_status_type}}</td>
                        <td>{{ phase.phase_cost }}</td>
                        <td>{{ phase.phase_start_date }}</td>
                        <td>
                            <router-link :to="{name: 'editPhase', params: { id: phase.phase_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                        <button @click.prevent="deletePhase(phase.phase_id)" class="btn btn-danger">Delete</button>

                            <br>
                            <br>
                            <router-link :to="{name: 'createStep', params: { id: phase.phase_number}}" style="text-align: center;" class="btn btn-success">Add Step
                            </router-link>

                            <br>
                            <br>
                            <router-link :to="{name: 'project_step_report', params: { id: phase.phase_number}}"  style="text-align: center; margin-right:10px;" class="btn btn-info">View Steps
                            </router-link>


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
                phases: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/phases';
            axios.get(apiURL).then(res => {
                this.phases = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deletePhase(id){
                console.log(id)
                let apiURL = `http://localhost:27017/phase/${id}`;
                let indexOfArrayItem = this.phases.findIndex(i => i.phase_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.phases.splice(indexOfArrayItem, 1);
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
