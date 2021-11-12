import React, { useState } from 'react'
import { Formik } from 'formik'
import {
  Grid, OutlinedInput, TextField, Button,
  FormControl, MenuItem, Select,
  InputLabel, Tab, Tabs
} from '@mui/material'


const PersonalInfo = () => {
  const initialValues = {

  }
  const handleSubmit = async (values, { isSubmitting }) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize={true}
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
        <form onSubmit={handleSubmit}>
          <div className='flex p-4'>
            <h4 className='m-0'>Login Settings</h4>
          </div>
          <Grid className='mb-4' container item spacing={6}>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <TextField name='username' className='w-full' id='outlined-basic' label='Username' size='small' variant='outlined' onChange={handleChange} />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <TextField name='password' className='w-full' id='outlined-basic' label='Password' size='small' variant='outlined' onChange={handleChange} />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <FormControl className='w-full' size='small'>
                <InputLabel htmlFor='counselor-label'>Login Status</InputLabel>
                <Select defaultValue='1' input={<OutlinedInput label='Counselor' name='login-status' onChange={handleChange} />}>
                  <MenuItem value={1}>Active</MenuItem>
                  <MenuItem value={2}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <div className='mt-6'>
            <Button
              color='primary'
              variant='contained'
              type='submit'
            >
              Save
            </Button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default PersonalInfo
