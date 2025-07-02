const icons = { dashboard: <i className="ph ph-house-line" />, layouts: <i className="ph ph-house-line" /> };

const navigation = {
  id: 'group-dashboard-loading-unique',
  title: 'Navigation',
  type: 'group',
  icon: icons.dashboard,
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      badge: 5,
      type: 'collapse',
      icon: icons.dashboard,
      children: [
        {
          id: 'default',
          title: 'Default',
          type: 'item',
          breadcrumbs: false,
          url: '/dashboard/default'
        }
      ]
    }
  ]
};

export default navigation;
