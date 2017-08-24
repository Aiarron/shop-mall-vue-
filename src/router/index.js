import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import Forget from '../components/Forget'
import Index from '../components/index/Index'
import All from '../components/index/All'
import Invite from '../components/index/Invite'
import Question from '../components/index/Question'
import Detail from '../components/index/Detail'
import News from '../components/message/mes'
import Newsdetail from '../components/message/Megdetail'
import Nomsg from '../components/message/Nomsg'
import Me from '../components/me/index'
import Person from '../components/me/person'
import Order from '../components/me/order'
import Car from '../components/car/CarItem'
import OrderDetail from '../components/me/orderDet'
import balance from '../components/me/balance'
import withdraw from '../components/me/withdraw'
import explain from '../components/me/explain'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/forget', name: 'Forget', component: Forget },
    { path: '/', name: 'Index', component: Index },
    { path: '/all', name: 'All', component: All },
    { path: '/invite', name: 'Invite', component: Invite },
    { path: '/question', name: 'Question', component: Question },
    { path: '/detail', name: 'Detail', component: Detail },
    { path: '/news', name: 'News', component:News },
    { path: '/newsdetail', name: 'Newsdetail', component:Newsdetail },
    { path: '/nomsg', name: 'Nomsg', component:Nomsg },
    { path: '/me', name: 'Me', component:Me },
    { path: '/person', name: 'Person', component:Person },
    { path: '/order', name: 'Order', component:Order },
    { path: '/car', name: 'Car', component:Car },
    { path: '/orderDet', name: 'OrderDetail', component:OrderDetail },
    { path: '/balance', name: 'balance', component:balance },
    { path: '/withdraw', name: 'withdraw', component:withdraw },
    { path: '/explain', name: 'explain', component:explain }
  ]
})
