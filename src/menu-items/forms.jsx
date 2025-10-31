// ==============================|| MENU ITEMS - FORM ||============================== //

const formComponents = {
  id: 'forms',
  title: 'Forms',
  type: 'group',
  children: [
    {
      id: 'form-elements',
      title: 'Form elements',
      type: 'collapse',
      icon: 'ph ph-textbox',
      children: [
        {
          id: 'form-basic',
          title: 'Form basic',
          type: 'item',
          url: '/forms/form-elements/basic'
        }
      ]
    }
  ]
};

export default formComponents;
