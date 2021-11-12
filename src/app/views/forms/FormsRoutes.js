import React from 'react'

const formsRoutes = [
    {
        path: '/forms/basic',
        component: React.lazy(() => import('./BasicForm')),
    },
    {
        path: '/forms/editor',
        component: React.lazy(() => import('./EditorForm')),
    },
    {
        path: '/forms/upload',
        component: React.lazy(() => import('./UploadForm')),
    },
    {
        path: '/forms/invoice',
        component: React.lazy(() => import('./invoice-form/InvoiceForm')),
    },
    {
        path: '/forms/order',
        component: React.lazy(() => import('./order-form/OrderForm')),
    },
    {
        path: '/forms/wizzard',
        component: React.lazy(() => import('./WizardForm')),
    }
]

export default formsRoutes
