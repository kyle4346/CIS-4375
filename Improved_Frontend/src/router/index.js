import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VueChartJS from '@/views/VueChartJS'

// Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  //path is the home page for when running web app click on CFC Management App 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 //************Investor************* */
 {
  //This route takes us to the Create Client Form using the Create Component 
  path: '/createInvestor',
  name: 'createInvestor',
  component: () => import('../components/Investor/CreateInvestor')
},
{
  //This route takes us to the View Clients based on the ListComponent
  path: '/viewInvestor',
  name: 'viewInvestor',
  component: () => import('../components/Investor/ViewInvestor')
},
{
  //this edit route takes us to the editComponent to be 
  //able to edit the fields once in the view clients
  path: '/editInvestor',
  name: 'editInvestor',
  component: () => import('../components/Investor/EditInvestor')
},


//*************Subcontractor*************** */
{
  //This route takes us to the Create Client Form using the Create Component 
  path: '/createSubcontractor',
  name: 'createSubcontractor',
  component: () => import('../components/Subcontractor/CreateSubcontractor') 
 
},
{
  //route to allow to viewClient Activity based on componet ViewClientActivity 
  path: '/viewSubcontractor',
  name: 'viewSubcontractor',
  component: () => import('../components/Subcontractor/ViewSubcontractor')
},

{
  //route to be used to edit client activity based on the component EditClientActivity
  path: '/editSubcontractor',
  name: 'editSubcontractor',
  component: () => import('../components/Subcontractor/EditSubcontractor')
},

//********************End of Subcontractor Intake Form**************************** */


//******************************Start of Employee Intake Form***************************************************/
{
  //This route takes us to the Create Client Form using the Create Component 
  path: '/createEmployee',
  name: 'createEmployee',
  component: () => import('../components/Employee/CreateEmployee') 
 
},
{
  //route to allow to viewClient Activity based on componet ViewClientActivity 
  path: '/viewEmployee',
  name: 'viewEmployee',
  component: () => import('../components/Employee/ViewEmployee')
},

{
  //route to be used to edit client activity based on the component EditClientActivity
  path: '/editEmployee',
  name: 'editEmployee',
  component: () => import('../components/Employee/EditEmployee')
},

//******************************End of Employee Intake Form*********************************************************************************/


//*******************************Start of Project Intake Form************************************************************************** */
{
  //This route takes us to the Create Client Form using the Create Component 
  path: '/createProject',
  name: 'createProject',
  component: () => import('../components/Project/CreateProject') 
 
},
{
  //route to allow to viewClient Activity based on componet ViewClientActivity 
  path: '/viewProject',
  name: 'viewProject',
  component: () => import('../components/Project/ViewProject')
},

{
  //route to be used to edit client activity based on the component EditClientActivity
  path: '/editProject',
  name: 'editProject',
  component: () => import('../components/Project/EditProject')
},


//*******************************End of Project Intake Form********************************************************************************************************* */


//***********Client Activity************* */
{
  path: '/activity',
    name: 'activity',
    component: () => import('../components/ClientActivity/ActivitiesTable.vue')
},

//*******Vue Chart******* */
{
  //Activities Summary chart based on the component VueChartJS
  path: '/chartjs',
  name: 'VueChartJS',
  component: VueChartJS
},


  
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes // short for `routes: routes`
})

export default router
