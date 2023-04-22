import { createWebHistory, createRouter } from "vue-router";
import Employees from "./components/employeeList";
import AddEmployee from "./components/addEmployee.vue";

const routes = [
  { path: "/", name: "employees", component: Employees },
  { path: "/employee/add", name: "add-employee", component: AddEmployee }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
