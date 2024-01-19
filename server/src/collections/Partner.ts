import { CollectionConfig } from 'payload/types'

const Partner: CollectionConfig = {
    slug: 'partner',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        }
    ],
}

export default Partner
