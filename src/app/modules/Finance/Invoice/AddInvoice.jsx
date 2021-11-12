import React, { useRef } from 'react'
import { Formik } from 'formik'
import {
  Grid, Card, Divider, TextField, Button,
  FormControl, MenuItem, Select,
  InputLabel
} from '@mui/material'
import _ from 'lodash'

import { Breadcrumb, NumberField } from 'app/components'
import useUploadImage from 'app/hooks/useUploadImage'

const AddInvoice = () => {
  const { imageUrl: avatarUrl, imageFile: avatarFile, handleUploadImage } = useUploadImage({ type: 'horizontal' })
  const formRef = useRef()

  const initialValues = {

  }

  const handleSubmit = async (values, { isSubmitting }) => {
    const combinedValues = _.omitBy({ ...values, avatar: avatarFile }, _.isUndefined)
    console.log(combinedValues)
  }

  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Invoices', path: '/invoices/add' },
            { name: 'Add Invoice' }
          ]}
        />
      </div>
      <Grid container justifyContent='flex-end' >
        <Button
          color='primary'
          variant='contained'
          type='submit'
          className='m-2 mb-4'
          onClick={() => {
            if (formRef.current) {
              formRef.current.handleSubmit()
            }
          }}
        >
          Save
        </Button>
      </Grid>
      <Grid container spacing={6}>
        <Grid item lg={12}>
          <Card elevation={3}>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              enableReinitialize={true}
              innerRef={formRef}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setSubmitting,
                setFieldValue,
              }) => (
                <form className='p-4' onSubmit={handleSubmit}>
                  <div className='flex p-4'>
                    <h4 className='m-0'>Room Information</h4>
                  </div>
                  <Divider className='mb-4' />
                  <Grid className='mb-4' container item spacing={6}>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <TextField name='roomName' className='w-full' id='outlined-basic' label='Room Name' size='small' variant='outlined' onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <NumberField name='floor' className='w-full' id='outlined-basic' label='Floor' size='small' variant='outlined' onChange={handleChange} />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <NumberField name='capacity' className='w-full' id='outlined-basic' label='Capacity (slots)' size='small' variant='outlined' onChange={handleChange} />
                    </Grid>
                  </Grid>
                  <Grid className='mb-4' container item spacing={6}>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <FormControl className='w-full' size='small'>
                        <InputLabel htmlFor='grouped-select'>Room Type</InputLabel>
                        <Select name='roomType' onChange={handleChange} defaultValue='1' id='grouped-select' label='Room Type'>
                          <MenuItem value={1}>Classroom</MenuItem>
                          <MenuItem value={2}>Office</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <FormControl className='w-full' size='small'>
                        <InputLabel htmlFor='grouped-select'>Status</InputLabel>
                        <Select name='status' onChange={handleChange} defaultValue='1' id='grouped-select' label='Status'>
                          <MenuItem value={1}>Availale</MenuItem>
                          <MenuItem value={2}>Not Available</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <div className='flex p-4'>
                    <h4 className='m-0'>Room Schedule</h4>
                  </div>
                  <Divider className='mb-4' />
                </form>
              )}
            </Formik>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddInvoice
