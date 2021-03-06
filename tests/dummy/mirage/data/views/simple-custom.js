export default {
  version: '2.0',
  type: 'form',
  cells: [
    {
      extends: 'main'
    }
  ],
  cellDefinitions: {
    main: {
      children: [
        {
          model: 'firstName'
        },
        {
          model: 'lastName'
        },
        {
          model: 'alias'
        },
        {
          model: 'onlyChild',
          renderer: {
            name: 'BooleanRenderer'
          }
        }
      ]
    }
  }
}
