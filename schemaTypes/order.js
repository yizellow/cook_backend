export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'customer',
      title: 'Customer',
      type: 'object',
      fields: [
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'},
      ],
    },
    {
      name: 'orderCode',
      title: 'Order Code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'object',
      fields: [
        {name: 'drinkName', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'snackName', type: 'string'},
        {name: 'chefId', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'chefName', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'menuItemId', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'menuItemName', type: 'string', validation: (Rule) => Rule.required()},
        {
          name: 'parameters',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'id', type: 'string'},
                {name: 'name', type: 'string'},
                {name: 'type', type: 'string'},
                {name: 'value', type: 'string'},
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'createdAt',
      type: 'datetime',
    },
  ],
}
