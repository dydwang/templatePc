import menuList from "./my/menuList";
let routes=[
  {
    path:'/user',
    name:'user',
    component:()=>import('./index/index'),
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('./home/index')
      },
      {
        path:'/sign',
        component:()=>import('./login/index'),
        children:[
          {
            path:'/signIn',
            name:'登录',
            component:()=>import('./login/signIn')
          },
          {
            path:'/signUp',
            name:'注册',
            component:()=>import('./login/signUp')
          },
          {
            path:'/forget',
            name:'注册',
            component:()=>import('./login/forget')
          }
        ]
      },
      {
        path:'/myIndex',
        name:'myIndex',
        component:()=>import('./my/index'),
        children:[
          ...menuList
        ]
      }

    ]
  }
];
export default routes
