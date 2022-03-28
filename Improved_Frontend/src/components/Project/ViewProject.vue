<template>
    <div class="row">
        <div class="col-lg-12">
             <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Projects:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="searchProjects" placeholder="ex: Project Num or Project Name" /> 

            <br>
            <br>
            <table class="table styled-table">
                <col   style="width:0%; text-align:center"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%">
                <col   style="width:0%">
                <thead class="thead-dark">
                    <tr>
                        <th>Project Num</th>
                        <th>PSID</th>
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
                    <tr v-for="project in filteredProjects" :key="project.project_number">
                        <td>{{ project.project_number }}</td>
                        <td>{{ project.psid }}</td>
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

                            <br>
                            <br>
                            <router-link :to="{name: 'createPhase', params: { id: project.project_number}}" style="text-align: center;" class="btn btn-secondary">Add Phase
                            </router-link>

                            <br>
                            <br>
                            <router-link :to="{name: 'project_phase_report', params: { id: project.project_number}}"  style="text-align: center; margin-right:10px;" class="btn btn-dark">Assigned Phases
                            </router-link>

                            <br>
                            <br>
                            <router-link :to="{name: 'viewPhase', params: { id: project.project_number}}"  style="text-align: center; margin-right:10px;" class="btn btn-primary">View Phases
                            </router-link>

                            <br>
                            <br>
                           
                            <router-link :to="{name: 'project_investor_report', params: { id:project.psid}}"  style="text-align: center; margin-right:10px; background-color:#5d00ff " class="btn btn-dark">Assigned Investors
                            </router-link>

                            <br>
                            <br>

                            <router-link :to="{name: 'project_employee_report', params: { id:project.psid}}"  style="text-align: center; margin-right:10px; background-color:#ff8400 " class="btn btn-dark">Assigned Employees
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
                projects: [],
                searchProjects: ''

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
        computed: {
            filteredProjects: function(){


                return this.projects.filter((project) =>{

                    return project.project_number.match(this.searchProjects) ||
                           project.psid.match(this.searchProjects) ||
                           project.project_name.toLowerCase().match(this.searchProjects.toLowerCase()) ||
                           project.project_location_name.toLowerCase().match(this.searchProjects.toLowerCase()) 
                           
                    
                })
            }    
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
