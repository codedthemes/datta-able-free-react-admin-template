// ==============================|| MENU ITEMS - OTHER ||============================== //

const other = {
  id: 'other',
  title: 'Other',
  type: 'group',
  children: [
    {
      id: 'menu-levels',
      title: 'Menu-levels',
      type: 'collapse',
      icon: <i className="ph ph-tree-structure" />,
      children: [
        {
          id: 'level-2.1',
          title: 'Level-2.1',
          type: 'item'
        },
        {
          id: 'level-2.2',
          title: 'Level-2.2',
          type: 'collapse',
          children: [
            {
              id: 'level-3.1',
              title: 'Level-3.1',
              type: 'item'
            },
            {
              id: 'level-3.2',
              title: 'Level-3.2',
              type: 'item'
            },
            {
              id: 'level-3.3',
              title: 'Level-3.3',
              type: 'collapse',
              children: [
                {
                  id: 'level-4.1',
                  title: 'Level-4.1',
                  type: 'item'
                },
                {
                  id: 'level-4.2',
                  title: 'Level-4.2',
                  type: 'item'
                }
              ]
            }
          ]
        },
        {
          id: 'level-2.3',
          title: 'Level-2.3',
          type: 'collapse',
          children: [
            {
              id: 'level-3.1',
              title: 'Level-3.1',
              type: 'item'
            },
            {
              id: 'level-3.2',
              title: 'Level-3.2',
              type: 'item'
            },
            {
              id: 'level-3.3',
              title: 'Level-3.3',
              type: 'collapse',
              children: [
                {
                  id: 'level-4.1',
                  title: 'Level-4.1',
                  type: 'item'
                },
                {
                  id: 'level-4.2',
                  title: 'Level-4.2',
                  type: 'item'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'sample-page',
      title: 'Sample page',
      type: 'item',
      icon: <i className="ph ph-desktop" />,
      url: '/other/sample-page'
    }
  ]
};

export default other;
