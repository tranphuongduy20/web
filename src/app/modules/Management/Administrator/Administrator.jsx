import React from 'react'
import {
  Button,
  Grid,
  TextField,
} from '@material-ui/core'

import { Breadcrumb, SimpleCard } from 'app/components'
import AdministratorTable from './AdministratorTable'

const Administrator = () => {
  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Admin', path: '/admin/list' },
            { name: 'Admin List' },
          ]}
        />
      </div>
      <SimpleCard title='Advanced Search'>
        <Grid container spacing={6}>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item lg={9} md={9} sm={6} xs={12}></Grid>
          <Grid justifyContent="flex-end" container item lg={3} md={3} sm={6} xs={6}>
            <Button variant='contained' color='primary' onClick={() => { }}>Search</Button>
          </Grid>
        </Grid>
      </SimpleCard>
      <div className='py-3' />
      <AdministratorTable />
    </div>
  )
}

export default Administrator
