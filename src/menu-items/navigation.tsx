// types
import { NavItemType } from 'types/menu';

const navigation: NavItemType = {
  id: 'group-dashboard-loading-unique',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      icon: 'ph ph-house-line',
      url: '/'
    }
  ]
};

export default navigation;
