import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


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
    component: () => import('../components/CreateInvestor')
  },
  {
    //This route takes us to the View Clients based on the ListComponent
    path: '/viewInvestor',
    name: 'viewInvestor',
    component: () => import('../components/ViewInvestor')
  },
  {
    //this edit route takes us to the editComponent to be 
    //able to edit the fields once in the view clients
    path: '/editInvestor',
    name: 'editInvestor',
    component: () => import('../components/EditInvestor')
 },
 
 
 //*************Subcontractor*************** */
  {
    //This route takes us to the Create Client Form using the Create Component 
    path: '/createSubcontractor',
    name: 'createSubcontractor',
    component: () => import('../components/CreateSubcontractor') 
   
  },
  {
    //route to allow to viewClient Activity based on componet ViewClientActivity 
    path: '/viewSubcontractor',
    name: 'viewSubcontractor',
    component: () => import('../components/ViewSubcontractor')
  },
 
  {
    //route to be used to edit client activity based on the component EditClientActivity
    path: '/editSubcontractor',
    name: 'editSubcontractor',
    component: () => import('../components/EditSubcontractor')
 },

{
  //view client info based on the component client info
    

},
{
  //Activities Summary chart based on the component VueChartJS
  
},
{
  path: '/activity',
    name: 'activity',
    component: () => import('../components/ClientActivity/ActivitiesTable.vue')
}


  
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes // short for `routes: routes`
})

export default router
