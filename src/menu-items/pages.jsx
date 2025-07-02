// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: <i className="ph ph-lock-key" />,
      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'collapse',
          children: [
            {
              id: 'login',
              title: 'Login',
              type: 'item',
              url: '/auth/login',
              target: true
            }
          ]
        },
        {
          id: 'register',
          title: 'Register',
          type: 'collapse',
          children: [
            {
              id: 'register',
              title: 'Register',
              type: 'item',
              url: '/auth/register',
              target: true
            }
          ]
        }
      ]
    }
  ]
};

export default pages;
