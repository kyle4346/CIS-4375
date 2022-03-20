<template>
    <div class="row">
        <div class="col-lg-12">
             <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Tasks:</strong>
            <input style="margin-left:5px;  font-size: 12pt;"  size="30" type="text" v-model="searchTasks" placeholder="ex: Project Num or Task Num" /> 
           <br>
           <br>
            <p><router-link class="btn btn-primary" style="font-size:20px; color: White; font-weight:bold; margin-left:850px; margin-top: -110px;" to="/viewStep">View Steps</router-link></p>
            <table class="styled-table">
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
                    <tr v-for="task in filteredTasks" :key="task.task_id">
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
                tasks: [],
                searchTasks: ''
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
         computed: {
            filteredTasks: function(){


                return this.tasks.filter((task) =>{

                    return task.project_number.toLowerCase().match(this.searchTasks.toLowerCase()) ||
                           task.phase_number.toLowerCase().match(this.searchTasks.toLowerCase()) ||
                           task.step_number.toLowerCase().match(this.searchTasks.toLowerCase()) ||
                           task.task_number.toLowerCase().match(this.searchTasks.toLowerCase()) ||
                           task.task_name.toLowerCase().match(this.searchTasks.toLowerCase())
                    
                })
            }    
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



<style scoped>
/* Styles taken from Educba.com at https://www.educba.com/vue-js-table/*/
.styled-table {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: left;
}
.styled-table thead tr {
  background-color: #267bfa;
  color: #ffffff;
}
.btn-success {
        margin-right: 10px;
}


.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #267bfa;
}
.ic {
  width: 64px;
  height: 64px;
}
.ic2 {
  width: 64px;
  height: 64px;
}
.ic3 {
  width: 64px;
  height: 64px;
}
</style>
