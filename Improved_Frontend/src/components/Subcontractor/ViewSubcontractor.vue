<template>
    <div class="row">
        <div class="col-lg-12">
             <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Subcontractors:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="searchSubcontractors" placeholder="ex: last name or first name" /> 

            <br>
            <br>
            <table class="styled-table">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Business Name</th>
                        <th>Rate/Time</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subcontractor in filteredSubcontractors" :key="subcontractor.subcontractor_id">
                        <td>{{ subcontractor.subcontractor_fname }}</td>
                        <td>{{ subcontractor.subcontractor_lname }}</td>
                        <td>{{ subcontractor.subcontractor_business_name }}</td>
                        <td>{{ subcontractor.subcontractor_rate }}</td>
                        <td>{{ subcontractor.subcontractor_phone}}</td>
                        <td>{{ subcontractor.subcontractor_email }}</td>
                        <td>{{ subcontractor.subcontractor_status }}</td>
                        <td>{{ subcontractor.subcontractor_type }}</td>
                        <td>
                            <router-link :to="{name: 'editSubcontractor', params: { id: subcontractor.subcontractor_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>
                            
                            <button @click.prevent="deleteSubcontractor(subcontractor.subcontractor_id)" class="btn btn-danger">Delete</button>

                            <br>
                            <br>

                            <router-link :to="{name: 'subcontractor_step_report', params: { id:subcontractor.subid}}"  style="text-align: center; margin-right:10px; background-color:#5d00ff " class="btn btn-dark">Assigned Steps
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
                subcontractors: [],
                searchSubcontractors: ''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/subcontractors';
            axios.get(apiURL).then(res => {
                this.subcontractors = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredSubcontractors: function(){


                return this.subcontractors.filter((subcontractor) =>{

                    return subcontractor.subcontractor_fname.toLowerCase().match(this.searchSubcontractors.toLowerCase()) ||
                           subcontractor.subcontractor_lname.toLowerCase().match(this.searchSubcontractors.toLowerCase()) ||
                           subcontractor.subcontractor_phone.toLowerCase().match(this.searchSubcontractors.toLowerCase()) ||
                           subcontractor.subcontractor_email.toLowerCase().match(this.searchSubcontractors.toLowerCase()) 
                    
                })
            }    
        },
        methods: {
            deleteSubcontractor(id){
                console.log(id)
                let apiURL = `http://localhost:27017/subcontractor/${id}`;
                let indexOfArrayItem = this.subcontractors.findIndex(i => i.subcontractor_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.subcontractors.splice(indexOfArrayItem, 1);
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

