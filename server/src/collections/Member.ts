import { CollectionConfig } from 'payload/types'

const Member: CollectionConfig = {
    slug: 'member',
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'position',
            label: 'Position',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            required: false,
        }
    ],
}

export default Member
