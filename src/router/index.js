import {createRouter, createWebHashHistory} from 'vue-router'
import SuppliersList from "../components/SuppliersList";
import SuppliersMap from "../components/SuppliersMap";
import ResellersList from "../components/ResellersList";
import CustomersList from "../components/CustomersList";
import OrdersList from "../components/OrdersList";
import Home from "../components/Home";

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect : '/Home'
  },
  {
    path: '/SuppliersList',
    name: 'SuppliersList',
    component: SuppliersList
  },
  {
    path: '/ResellersList',
    name: 'ResellersList',
    component: ResellersList
  },
  {
    path: '/CustomersList',
    name: 'CustomersList',
    component: CustomersList
  },
  {
    path: '/OrdersList',
    name: 'OrdersList',
    component: OrdersList
  },
  {
    path: '/SuppliersMap',
    name: 'SuppliersMap',
    component: SuppliersMap
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
