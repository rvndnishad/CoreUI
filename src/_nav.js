export default {
  items: [
    {
      title:true,
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Buzz Index',
      icon: 'icon-globe',
      url: '/buzzindex',
      
      children: [
        {
          name: 'Actor/ Actress specific',
          icon: 'icon-people',
          url: '/buzzindex/actor'
        },
        {
          name: 'Quarter wise/ festive time',
          icon: 'icon-speedometer',
          url: '/buzzindex/Quarter'
        },
        {
          name: 'Box Office collection',
          icon: 'icon-folder-alt',
          url: '/buzzindex/collection'
    
        },
        {
          name: 'Weekly Buzz Index Score',
          icon: 'icon-calculator',
          url: '/buzzindex/IndexScore'
        },
        {
          name: 'Production house',
          icon: 'icon-camrecorder',
          url: '/buzzindex/Production'
    
        }
      ],
    },
    {
      name: 'CAM',
      url: '/cam',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Category snapshot',
          url: '/cam/Category-snapshot',
          icon: 'icon-cursor',
        },
        {
          name: 'Top brands (month on month)',
          url: '/cam/Top-brands',
          icon: 'icon-cursor',
        },
        {
          name: 'Reach',
          url: '/cam/Reach',
          icon: 'icon-cursor',
        },
        {
          name: 'Zone wise breakup',
          url: '/cam/Zone-wise-breakup',
          icon: 'icon-cursor',
        },
        {
          name: 'Chain wise breakup',
          url: '/cam/Chain-wise-breakup',
          icon: 'icon-cursor'
        },
        {
          name: 'Unaided Ad recall',
          url: '/cam/Unaided-Ad-recall',
          icon: 'icon-cursor'
        },
      ]
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Contact Development',
      url: 'http://coreui.io/react/',
      class: 'mt-auto',
      variant: 'success',
    }
  ],
};
