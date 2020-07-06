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
          }
        ]
      },

    ]
  }
];
export default routes
