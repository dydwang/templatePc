let menu={
    grade:['普通管理员'],
    //公共
    publicMenu:[
        {
            path:'/admin-home',
            name:'首页',
            icon:'el-icon-s-home',
        },
        {
            path:'/admin-info',
            name:'我的资料',
            show:false
        },
        {
            path:'/admin-user',
            name:'用户管理',
            icon:'el-icon-user',
            children:[
            ]
        },
        {
            path:'/admin-carousel',
            name:'轮播图管理',
            icon:'el-icon-picture-outline',
            //children:[]
        },
        {
          path:'/admin-news',
          name:'新闻资讯',
          icon:'el-icon-picture-outline',
          //children:[]
        },

    ],
    '默认管理员':[
        {
            path:'/admin-admin',
            name:'管理员管理',
            icon:'el-icon-user-solid',
            children:[]
        },
      {
        path:'/admin-mysql',
        name:'数据库管理',
        icon:'el-icon-s-order',
        children:[]
      },
    ],
    '普通管理员':[

    ]
}

export default menu
