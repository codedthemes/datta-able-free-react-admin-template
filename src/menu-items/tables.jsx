// ==============================|| MENU ITEMS - TABLES ||============================== //

const tableComponents = {
  id: 'tables',
  title: 'Tables',
  type: 'group',
  children: [
    {
      id: 'bootstrap-table',
      title: 'Bootstrap table',
      type: 'collapse',
      icon: <i className="ph ph-table" />,
      children: [
        {
          id: 'basic-table',
          title: 'Basic table',
          type: 'item',
          url: '/tables/bootstrap-table/basic-table'
        }
      ]
    }
  ]
};

export default tableComponents;
