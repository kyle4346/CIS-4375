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
                    <tr v-for="project in projects" :key="project.project_number">
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
                            <router-link :to="{name: 'editProject', params: { id: project.project_number}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                            


                        <button @click.prevent="deleteProject(project.project_number)" class="btn btn-danger">Delete</button>
                        <button @click.prevent="senddata()" class="btn btn-success">Post</button>
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
            let apiURL = 'https://data.mongodb-api.com/app/data-nhwaq/endpoint/projects';//http://localhost:27017/projects
            axios.get(apiURL).then(res => {
                this.projects = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteProject(id){
                console.log(id)
                let apiURL = `https://data.mongodb-api.com/app/data-nhwaq/endpoint/deleteprojectbyid`;//http://localhost:27017/project/${id}
                // let indexOfArrayItem = this.projects.findIndex(i => i.project_id === id);
                let headers = 
                {
                    "Content-Type": "application/json",
                    
                }; //, "Access-Control-Request-Headers": "*"

                if (window.confirm("Do you really want to delete?")) {
                    axios.post(apiURL,//axios.delete(apiURL)
            {
              dataSource: "Cluster0",
              database: "components",
              collection: "project",
              filter: { project_number: id },
            },
            { headers }
          ).then(() => {
                        //this.projects.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            },
            senddata() {
            axios.post("https://data.mongodb-api.com/app/data-nhwaq/endpoint/insertsysone",
          {
            dataSource: "Cluster0",
            database: "components",
            collection: "project",
            document: 
            {
              project_number: "18",
              project_name: "three story house",
              project_completed: "No",
              project_status_type: "Started",
              project_type_description: "Build from Scratch",
              project_location_name: "Cinco Ranch",
              project_location_city: "Rosenber",
              project_location_state: "AZ",
              project_location_status_type: "not available",
            },
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then(() => {
          this.$router.push("/viewProject");
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
        }
    }
</script>



<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
