<template>
  <div>
     <!-- Nav bar  customize based on what is desired -->
   <!-- <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand float-left " style="font-size:20px; color: Blue; font-weight:bold;" href="/">Home</a>
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
    -->
<nav class="navbar navbar-expand-lg navbar-dark ">

  <div class="container">
    

<a class="btn btn-primary" style="font-size:20px; color: white; font-weight:bold;" href="/" role="button">Dashboard</a>

    <!-- Example single danger button -->
    <div class="btn-group col-md-2">
  
  <button type="button" class="btn btn-primary dropdown-toggle" style="font-size:20px; color: white; font-weight:bold;" data-bs-toggle="dropdown" aria-expanded="false">
    Project Information
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-item">
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/createProject">Create Project</router-link>
    </li>

    
    <li><hr class="dropdown-divider"></li>
     <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/viewProject">View Projects</router-link>
    </li>
    
  </ul>
</div>
<div   class="btn-group col-md-2">
  
  <button  type="button" class="btn btn-primary dropdown-toggle" style="font-size:20px; color: white; font-weight:bold;" data-bs-toggle="dropdown" aria-expanded="false">
    Personnel Information
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold; text-align:left;" to="/createInvestor">Create Investor</router-link>
    </li>
    <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/createSubcontractor">Create Subcontractor</router-link>
    </li>
    <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/createEmployee">Create Employee</router-link>
    </li>
    
    

    
     <li><hr class="dropdown-divider"></li>
      <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/viewInvestor">View Investors</router-link>
    </li>
     <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/viewSubcontractor">View Subcontractors</router-link>
    </li>
    <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/viewEmployee">View Employees</router-link>
    </li>
   

     
  </ul>
</div>




<!-- Example single danger button -->
<div style="margin-right:80px"  class="btn-group col-md-2">
  
  <button type="button" class="btn btn-primary dropdown-toggle" style="font-size:20px; color: white; font-weight:bold;" data-bs-toggle="dropdown" aria-expanded="false">
    Resource Assignments
  </button>
  <ul class="dropdown-menu">

     <li class="dropdown-item">
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/createInvestorAssigned">Create Investor Assignment</router-link>
    </li>
     <li class="dropdown-item">
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/createSubcontractorAssigned">Create Subcontractor Assignment</router-link>
    </li>

     <li class="dropdown-item">
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/createEmployeeAssigned">Create Employee Assignment</router-link>
    </li>
    
   
   <li><hr class="dropdown-divider"></li>
  
    <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/viewInvestorAssigned">View Assigned Investors</router-link>
    </li>

    <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/viewSubcontractorAssigned">View Assigned Subcontractors</router-link>
    </li>

     <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/viewEmployeeAssigned">View Assigned Employees</router-link>
    </li>

    
  </ul>
</div>
 
<!-- Example single danger button -->

<!-- <div class="btn-group col-md-2">
  
  <button type="button" class="btn btn-primary dropdown-toggle" style="font-size:20px; color: white; font-weight:bold;" data-bs-toggle="dropdown" aria-expanded="false">
    Reports
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-item" >
      <router-link class="nav-link" style="font-size:20px; color: black; font-weight:bold;" to="/project_phase_report/">Phase Report</router-link>
    </li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

-->
<!-- <div class="btn-group col-md-2">
  
  <button type="button" class="btn btn-primary dropdown-toggle"  style="font-size:20px; color: white; font-weight:bold;" data-bs-toggle="dropdown" aria-expanded="false">
    Charts
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
 -->
  </div>
</nav>




    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>



<style>
.navbar{
  position: fixed;
  background: rgb(0, 0, 0);
}
.btn{
  display:inline-block;
}


</style>