<template>
  <div id="nav">
    <router-link :to="{ name: 'Project' }">Project</router-link> |
    <router-link :to="{ name: 'Investors' }">Investors</router-link> |
    <router-link :to="{ name: 'createInvestor' }">Investor Form</router-link> |
    <router-link :to="{ name: 'viewInvestor' }">View Investors</router-link> |
    <router-link :to="{ name: 'Subcontractors' }">Subcontractors</router-link> |
    <router-link :to="{ name: 'Task' }">Tasks</router-link> 
    <router-view> </router-view> 
  </div>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  list-style-type: upper-roman;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
