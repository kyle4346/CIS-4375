<template>
  <div>
    <!-- Nav bar  customize based on what is desired -->
    <nav class="navbar navbar-expand navbar-light bg-light">

      <div class="container">
        <a class="navbar-brand float-left " style="font-size:20px; color: Blue; font-weight:bold;" href="/">Pipeline International App</a>
        <ul class="nav navbar-nav mr-auto" >
          <li class="nav-item">
            <router-link class="nav-link" style="font-size:20px; color: Blue; font-weight:bold;" to="/createInvestor">Create Investor Form</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link" style="font-size:20px; color: Blue; font-weight:bold;" to="/viewInvestor">View Investors</router-link>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link" style="font-size:20px; color: Blue; font-weight:bold;" to="/createSubcontractor">Create Subcontractor Form</router-link>
          </li> 
          <li class="nav-item">
            <router-link class="nav-link" style="font-size:20px; color: Blue; font-weight:bold;" to="/viewSubcontractor">View Subcontractor  Form</router-link>
          </li> 
          <li class="nav-item">
            <router-link class="nav-link" style="font-size:20px; color: Blue; font-weight:bold;" to="/chartjs">Summary Graph</router-link>
          </li>  
        </ul>
      </div>

      
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
