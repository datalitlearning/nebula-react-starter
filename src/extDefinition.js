const extDefinition = {
  definition: {
    type: 'items',
    component: 'accordion',
    items: {
      data: {
        uses: 'data',
      },
      sorting: {
        uses: 'sorting'
      },
      addons: {
        uses: 'addons'
      },
      settings: {
        uses: 'settings',
        items: {
          backgroundColor: {
            ref: 'backgroundColor',
            label: 'Header Background Color',
            component: 'color-picker',
            type: 'object',
            defaultValue: {
              color: 'white',
              index: '-1'
            }
          },
          textColor: {
            ref: 'textColor',
            label: 'Text Color',
            component: 'color-picker',
            type: 'object',
            defaultValue: {
              color: 'black',
              index: '-1'
            }
          },
        }
      },
    },
  },
  support: {
    export: true,
    exportData: true,
    snapshot: true,
    viewData: false,
  },
};

export default extDefinition;
