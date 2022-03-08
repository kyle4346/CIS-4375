<template>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Project Num</th>
                        <th>Project Name</th>
                        <th>Project Done</th>
                        <th>Project Status</th>
                        <th>Project Type</th>
                        <th>Project Location</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Project Location Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="project in projects" :key="project.project_id">
                        <td>{{ project.project_number }}</td>
                        <td>{{ project.project_name }}</td>
                        <td>{{ project.project_completed }}</td>
                        <td>{{ project.project_status_type }}</td>
                        <td>{{ project.project_type_description}}</td>
                        <td>{{ project.project_location_name }}</td>
                        <td>{{ project.project_location_city }}</td>
                        <td>{{ project.project_location_state }}</td>
                        <td>{{ project.project_location_status_type }}</td>
                        <td>
                            <router-link :to="{name: 'editProject', params: { id: project.project_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                            


                        <button @click.prevent="deleteProject(project.project_id)" class="btn btn-danger">Delete</button>
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
                projects: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/projects';
            axios.get(apiURL).then(res => {
                this.projects = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteProject(id){
                console.log(id)
                let apiURL = `http://localhost:27017/project/${id}`;
                let indexOfArrayItem = this.projects.findIndex(i => i.project_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.projects.splice(indexOfArrayItem, 1);
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
