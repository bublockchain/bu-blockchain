import { CollectionConfig } from 'payload/types'

const Event: CollectionConfig = {
    slug: 'event',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'date',
            label: 'Date',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayAndTime'
                }
            },
            required: true,
        },
        {
            name: 'link',
            label: 'Link',
            type: 'text',
            required: false,
        }
    ],
}

export default Event
