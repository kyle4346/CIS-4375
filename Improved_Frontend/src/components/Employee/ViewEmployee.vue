<template>
    <div class="row">
        <div class="col-lg-12">

            <strong style="margin-left:470px; font-size: 20pt; color:Black; "  >Search Employees:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="searchEmployees" placeholder="ex: last name or first name" /> 

            <br>
            <br>

            <table class="styled-table">
                <thead class="thead-dark">
                    <tr>
                      
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Phone</th>
                        <th>Employee Email</th>
                        <th>Employee Title</th>
                        <th>Employee Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in filteredEmployees" :key="employee.employee_id">
                        
                        <td>{{ employee.employee_first_name }}</td>
                        <td>{{ employee.employee_last_name }}</td>
                        <td>{{ employee.employee_phone }}</td>
                        <td>{{ employee.employee_email }}</td>
                        <td>{{ employee.employee_title_description}}</td>
                        <td>{{ employee.employee_status_type}}</td>
                        <td>
                            <router-link :to="{name: 'editEmployee', params: { id: employee.employee_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                            


                        <button @click.prevent="deleteEmployee(employee.employee_id)" class="btn btn-danger">Delete</button>
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
                employees: [],
                searchEmployees: ''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/employees';
            axios.get(apiURL).then(res => {
                this.employees = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
       computed: {
            filteredEmployees: function(){


                return this.employees.filter((employee) =>{

                    return employee.employee_first_name.toLowerCase().match(this.searchEmployees.toLowerCase()) ||
                           employee.employee_last_name.toLowerCase().match(this.searchEmployees.toLowerCase()) ||
                           employee.employee_phone.toLowerCase().match(this.searchEmployees.toLowerCase()) ||
                           employee.employee_email.toLowerCase().match(this.searchEmployees.toLowerCase()) 
                    
                })
            }    
        },
        methods: {
            deleteEmployee(id){
                console.log(id)
                let apiURL = `http://localhost:27017/employee/${id}`;
                let indexOfArrayItem = this.employees.findIndex(i => i.employee_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.employees.splice(indexOfArrayItem, 1);
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
        margin-right: 6px;
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

