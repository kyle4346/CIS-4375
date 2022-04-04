<template>
    <div class="row">
        <div class="col-lg-12">

        <strong style="margin-left:230px; font-size: 20pt; color:Black; "  >Search Employees Assigned:</strong>
        <input style="margin-left:5px; align:center; font-size: 12pt;"  size="50" type="text" v-model="search" placeholder="ex: EMPID or first name or last name or project number  " />
        <p><router-link class="btn btn-primary" style="font-size:20px; color: White; font-weight:bold; margin-left:1030px; margin-top: -60px; padding: 1px 2px;" to="/createEmployeeAssigned">Create Employee Assignment</router-link></p>
         
          
            <table class="styled-table">
                <col   style="width:1%"> 
                <col   style="width:1%"> 
                <col   style="width:12%"> 
                <col   style="width:16%"> 
                <col   style="width:14%"> 
                <col   style="width:0%"> 
                <col   style="width:2%"> 
                 
                <thead class="thead-dark">
                   
        
                    <tr>
                        <th>EMPID</th>
                        <th>PSID</th>
                        <th>Project Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Assigned Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee_assigned in filteredEmployeesAssigned" :key="employee_assigned.employee_assigned_id">
                        <td style="vertical-align:top">{{ employee_assigned.empid }}</td>
                        <td style="vertical-align:top">{{ employee_assigned.psid}}</td>
                        <td style="vertical-align:top">{{ employee_assigned.project_number }}</td>
                        <td style="vertical-align:top">{{ employee_assigned.employee_firstname }}</td>
                        <td style="vertical-align:top">{{ employee_assigned.employee_lastname }}</td>
                        <td style="vertical-align:top">{{ employee_assigned.employee_assigned_date}}</td>
                        <td>
                            <router-link :to="{name: 'editEmployeeAssigned', params: { id: employee_assigned.employee_assigned_id}}" style="text-align: center; margin-top:0px; padding: 2px 12px; font-size:16px" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteemployeeAssigned(employee_assigned.employee_assigned_id)" style="text-align: center; margin-top:5px; padding: 2px 3px; font-size:16px" class="btn btn-danger">Delete</button>

                            
                            
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
                employee_assigneds: [] ,
                search: ''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/employee_assigned';
            axios.get(apiURL).then(res => {
                this.employee_assigneds = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredEmployeesAssigned: function(){


                return this.employee_assigneds.filter((employee_assigned) =>{

                    return employee_assigned.empid.match(this.search) ||
                           employee_assigned.project_number.match(this.search) ||
                           employee_assigned.employee_firstname.toLowerCase().match(this.search.toLowerCase()) ||
                           employee_assigned.employee_lastname.toLowerCase().match(this.search.toLowerCase()) 
                    
                })
            }    
        },
        methods: {
            deleteemployeeAssigned(id){
                console.log(id)
                let apiURL = `http://localhost:27017/employee_assigned/${id}`;
                let indexOfArrayItem = this.employee_assigneds.findIndex(i => i.employee_assigned_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.employee_assigneds.splice(indexOfArrayItem, 1);
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
  height: 1%;
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
