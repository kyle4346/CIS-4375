<template>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Project Num</th>
                        <th>Phase Num</th>
                        <th>Step Num</th>
                        <th>Task Num</th>
                        <th>Task Name</th>
                        <th>Task Completed</th>
                        <th>Task Status</th>
                        <th>Task Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasks" :key="task.task_id">
                        <td>{{ task.project_number }}</td>
                        <td>{{ task.phase_number }}</td>
                        <td>{{ task.step_number }}</td>
                        <td>{{ task.task_number }}</td>
                        <td>{{ task.task_name }}</td>
                        <td>{{ task.task_completed }}</td>
                        <td>{{ task.task_status_type}}</td>
                        <td>{{ task.task_start_date }}</td>
                        <td>
                            <router-link :to="{name: 'editTask', params: { id: task.task_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                        <button @click.prevent="deleteTask(task.task_id)" class="btn btn-danger">Delete</button>

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
                tasks: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/tasks';
            axios.get(apiURL).then(res => {
                this.tasks = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteTask(id){
                console.log(id)
                let apiURL = `http://localhost:27017/task/${id}`;
                let indexOfArrayItem = this.tasks.findIndex(i => i.task_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.tasks.splice(indexOfArrayItem, 1);
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
