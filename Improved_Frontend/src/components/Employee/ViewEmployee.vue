<template>
    <div class="row">
        <div class="col-lg-12">

            <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Employees:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="searchEmployees" placeholder="ex: last name or first name" /> 

            <p><router-link class="btn createEmployee"  to="/createEmployee">Add Employee</router-link></p>
            <table class="styled-table">
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:1%"> 
                <thead class="thead-dark">
                    <tr>
                      
                        <th style="position:sticky">Employee First Name</th>
                        <th style="position:sticky">Employee Last Name</th>
                        <th style="position:sticky">Employee Phone</th>
                        <th style="position:sticky">Employee Email</th>
                        <th style="position:sticky">Employee Title</th>
                        <th style="position:sticky">Employee Status</th>
                        <th style="position:sticky">Actions</th>
                        <th style="position:sticky">Reports</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in filteredEmployees" :key="employee.employee_id">
                        
                        <td style="vertical-align:top">{{ employee.employee_first_name }}</td>
                        <td style="vertical-align:top">{{ employee.employee_last_name }}</td>
                        <td style="vertical-align:top">{{ employee.employee_phone }}</td>
                        <td style="vertical-align:top">{{ employee.employee_email }}</td>
                        <td style="vertical-align:top">{{ employee.employee_title_description}}</td>
                        <td style="vertical-align:top">{{ employee.employee_status_type}}</td>
                        <td style="position:sticky">
                            <router-link :to="{name: 'editEmployee', params: { id: employee.employee_id}}"  class="btn one">Edit

                            </router-link>

                            <br>

                        
                        <button @click.prevent="deleteEmployee(employee.employee_id)"  class="btn two">Delete</button>
                        
                        <br>
                        <br>
                         <router-link :to="{name: 'createEmployeeAssigned', params: { id: employee.employee_email}}"  class="btn three">Employee<br/> Assigned
                            </router-link>

                        </td>

                        <td style="position:sticky">
                        <router-link :to="{name: 'employee_project_report', params: { id:employee.employee_email}}"  class="btn four">Assigned<br/> Projects
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
  height: 115%;
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
.createEmployee{
border: 2px solid black;
font-size:20px; 
color: White; 
background-color: #267bfa;
font-weight:bold; 
margin-left:980px; 
margin-top: -40px;
}

.btn{
    position: -webkit-absolute;
    position: absolute;
    margin-right: 0px;

}

.one {
   border: 2px solid black;
   margin-top: -19px;
   margin-left:-20px; 
   color:white; 
   background-color:green; 
   padding: 1px 3px;
   font-size:16px
    
    
}

.two {
   border: 2px solid black;
   margin-top: -43px;
   margin-left:20px; 
   color:white; 
   background-color:red; 
   padding: 1px 7px;
   font-size:16px
   
    
}

.three{
   border: 2px solid black;
   margin-top: -55px;
   margin-left:-20px; 
   color:white; 
   background-color:gray; 
   padding: 1px 15px;
   font-size:16px
   
    
}

.four{
   border: 2px solid black;
   margin-top: -55px;
   margin-left:-2px; 
   color:black; 
   background-color:#FFD700; 
   padding: 20px 3px;
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
