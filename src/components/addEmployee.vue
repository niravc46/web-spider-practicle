<template>
  <form @submit="addEmployee()">
    <div class="form-group">
      <label for="exampleInputPassword1">First Name</label>
      <input
        class="form-control"
        v-model="first_name"
        placeholder="Enter first name"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Last Name</label>
      <input
        class="form-control"
        v-model="last_name"
        placeholder="Enter last name"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Age</label>
      <input
        class="form-control"
        v-model="age"
        placeholder="Enter emplyee age"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Salary</label>
      <input
        class="form-control"
        v-model="salary"
        placeholder="Enter emplyee salary"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      age: "",
      salary:"",
      new_employee_data:{
        employee_name:"",
        employee_salary:"",
        employee_age:"",  
        profile_image:"",  
      }  
    };
  },
  methods:{
    addEmployee(e){
        e.preventDefault()
        this.new_employee_data.employee_name = this.first_name+" "+this.last_name;
        this.new_employee_data.employee_salary = this.salary;
        this.new_employee_data.employee_age = this.age;
    }   
  }
};
</script>
