import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import head from '@/components/header'
import foot from '@/components/footer'
import clas from '@/components/class'
import paris from '@/components/class/paris'
import london from '@/components/class/london'
import canada from '@/components/class/canada'
import shengbaoluo from '@/components/class/shengbaoluo'
import ade from '@/components/class/ade'
import melbourne from '@/components/class/melbourne'
import shanghai from '@/components/class/shanghai'
import japan from '@/components/class/japan'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/head',
      name: 'head',
      component: head
    },
    {
      path: '/foot',
      name: 'foot',
      component: foot
    },
    {
      path: '/clas',
      name: 'clas',
      component: clas,
    },
    {
      path:'/paris',
      name:'paris',
      component: paris
    },
    {
      path:'/london',
      name:'london',
      component: london
    },
    {
      path:'/canada',
      name:'canada',
      component: canada
    },
    {
      path:'/shengbaoluo',
      name:'shengbaoluo',
      component: shengbaoluo
    },
    {
      path:'/ade',
      name:'ade',
      component: ade
    },
    {
      path:'/melbourne',
      name:'melbourne',
      component: melbourne
    },
    {
      path:'/shanghai',
      name:'shnaghai',
      component: shanghai
    },
    {
      path:'/japan',
      name:'japan',
      component: japan
    }
    
  ]
})
