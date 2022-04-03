<template>
    <div class="row">
        <div class="col-lg-12">
             <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Tasks:</strong>
            <input style="margin-left:5px;  font-size: 12pt;"  size="30" type="text" v-model="searchTasks" placeholder="ex: Project Num or Task Num" /> 
           <br>
           <br>
            <p><router-link class="btn createSteps"  to="/viewStep">View Steps</router-link></p>
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
                        <td style="vertical-align:top">{{ task.project_number }}</td>
                        <td style="vertical-align:top">{{ task.phase_number }}</td>
                        <td style="vertical-align:top">{{ task.step_number }}</td>
                        <td style="vertical-align:top">{{ task.task_number }}</td>
                        <td style="vertical-align:top">{{ task.task_name }}</td>
                        <td style="vertical-align:top">{{ task.task_completed }}</td>
                        <td style="vertical-align:top">{{ task.task_status_type}}</td>
                        <td style="vertical-align:top">{{ task.task_start_date }}</td>
                        <td>
                            <router-link :to="{name: 'editTask', params: { id: task.task_id}}" class="btn one">View / Edit
                            </router-link>


                        <button @click.prevent="deleteTask(task.task_id)" class="btn two">Delete</button>

                            
                            


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
.styled-table th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #267bfa;
  color: #ffffff;
}

.styled-table th::after{
    content: '';
    width:100%;
    height:2px;
    position:absolute;
    bottom: 0;
    left: 0;
    background: black;

}

.btn{
    position: -webkit-absolute;
    position: absolute;
    margin-right: 0px;

}

.createSteps{
font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:880px; 
    margin-top: -60px;

}

.one{
border: 2px solid black;
   margin-top: -35px;
   margin-left:-15px; 
   color:white; 
   background-color:green; 
   padding: 1px 3px;
   font-size:16px
}

.two{
border: 2px solid black;
   margin-top: -1px;
   margin-left:-15px; 
   color:white; 
   background-color:red; 
   padding: 1px 18px;
   font-size:16px

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
