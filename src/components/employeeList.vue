<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Employees List</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Employee Name</th>
            <th scope="col">Age</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody v-for="(employee, index) in employee_list" :key="index">
          <tr>
            <td>{{ employee.employee_name }}</td>
            <td>{{ employee.employee_age }}</td>
            <td>{{ employee.employee_salary }}</td>
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
      employee_list: [],
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    getAllEmployee() {
      axios
        .get("https://dummy.restapiexample.com/api/v1/employees")
        .then((response) => this.employee_list = response["data"]["data"])
        .catch((error) => console.log("error", error));
    },
  },
  mounted() {
    this.getAllEmployee();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
