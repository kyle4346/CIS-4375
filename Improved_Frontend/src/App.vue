<template>
  <div>
    <!-- Nav bar  customize based on what is desired -->
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand float-left " style="font-size:20px; color: Blue; font-weight:bold;" href="/">CFC Management App</a>
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
            <router-link class="nav-link" style="font-size:20px; color: Blue; font-weight:bold;" to="/viewSubcontractor">View Subcontractor Form</router-link>
          </li> 
          <li class="nav-item">
            <router-link class="nav-link" style="font-size:20px; color: Blue; font-weight:bold;" to="/chartjs">Summary Graph</router-link>
          </li>  
           <li class="nav-item">
            <router-link class="nav-link" style="font-size:20px; color: Blue; font-weight:bold;" to="/activity">Client Activities Table</router-link>
          </li>  
        </ul>
      </div>

      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: Blue; font-weight:bold;" to="/createInvestor">Create Investor Form</router-link>
    </li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>