<template>
    <div class="row">
         <h2>Tasks for Step Number: {{steps.step_number}}, Step Name: {{steps.step_name}}</h2>
        <div class="col-lg-12">

            <table class="styled-table">
                
                <thead class="thead-dark">
                    <tr>
                        <th>Task Name:</th>
                        <th>task Num:</th>
                        <th>Task Completed:</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in Tasks" :key="task.task_id">
                        <td>{{ task.task_name}} </td>
                        <td>{{ task.task_number }}</td>
                        <td>{{ task.task_completed }}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

  


</template>

<script>
    import axios from "axios";
    //pass data values from the cfcworker_client_activity
    export default {
        data() {
            return {
            //retrieving data from the Cfcworker_client_activities schema getting the data 
                Tasks: [], 
                steps: {},
                task: {
                   task_name: '',
                   task_number: '',
                   task_completed: '',
                   step_number: this.$route.params.id 
                   
                },
                
                 
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/project_task_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.Tasks = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
            let apiURL1 = `http://localhost:27017/step_report/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
                this.steps = res.data;
            }).catch(error => {
                console.log(error)
            });

        },
        
        methods: {
            

           
        }
    }
</script>



<style scoped>
/* Styles taken from Educba.com at https://www.educba.com/vue-js-table/*/
.styled-table {
  border-collapse: collapse;
  font-size: 12pt;
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