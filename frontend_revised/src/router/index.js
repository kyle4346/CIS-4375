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
 
  {
    //route Create Client activity using the createclient activity 
    //component allow us to create client activity  
   
  },
  {
    //route to allow to viewClient Activity based on componet ViewClientActivity 
    
  },
 
  {
    //route to be used to edit client activity based on the component EditClientActivity
    
 },

{
  //view client info based on the component client info
    

},
{
  //Activities Summary chart based on the component VueChartJS
  
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
