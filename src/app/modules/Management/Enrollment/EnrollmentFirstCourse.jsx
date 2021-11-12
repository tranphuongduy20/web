import React, { useRef } from 'react'
import {
  Grid, Card, Divider, TextField,
  FormControl, MenuItem, Select,
  InputLabel, OutlinedInput, Button
} from '@mui/material'
import _ from 'lodash'

import { Breadcrumb } from 'app/components'
import useUploadImage from 'app/hooks/useUploadImage'
import { Formik } from 'formik'


const EnrollFirstCourse = () => {

  const formRef = useRef()
  const { imageUrl: avatarUrl, imageFile: avatarFile, handleUploadImage } = useUploadImage({ type: 'horizontal' })

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
            { name: 'Enrollments', path: '/enrollments/add' },
            { name: 'Add Enrollment' }
          ]}
        />
      </div>
      <Grid container spacing={6}>
        <Grid item lg={12}>
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
              Enroll
            </Button>
          </Grid>
          <Card elevation={3} className='p-4'>
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
                <form onSubmit={handleSubmit}>
                  <div className='flex p-4'>
                    <h4 className='m-0'>Student Information</h4>
                  </div>
                  <Divider className='mb-6' />
                  <Grid className='mb-4' container item spacing={6}>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <TextField
                        name='studentId'
                        label='Student ID'
                        className='w-full'
                        size='small'
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <TextField
                        name='firstName'
                        label='First Name'
                        className='w-full'
                        size='small'
                        disabled
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <TextField
                        id='date'
                        name='lastName'
                        label='Last Name'
                        className='w-full'
                        size='small'
                        disabled
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <div className='flex p-4'>
                    <h4 className='m-0'>Enrollment</h4>
                  </div>
                  <Divider className='mb-6' />
                  <Grid className='mb-4' container item spacing={6}>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <TextField
                        id='date'
                        name='enrollmentDate'
                        label='Enrollment Date'
                        type='date'
                        className='w-full'
                        size='small'
                        defaultValue='2017-05-24'
                        InputLabelProps={{
                          shrink: true
                        }}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <TextField
                        id='time'
                        label='Enrollment Time'
                        name='enrollmentTime'
                        type='time'
                        defaultValue='07:30'
                        className='w-full'
                        size='small'
                        InputLabelProps={{
                          shrink: true
                        }}
                        inputProps={{
                          step: 300
                        }}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <FormControl className='w-full' size='small'>
                        <InputLabel htmlFor='enrollment-program' id='enrollment-program-label'>Enrollment Program</InputLabel>
                        <Select defaultValue='1' input={<OutlinedInput label='Enrollment Program' name='enrollmentProgram' onChange={handleChange} />}>
                          <MenuItem value={1}>Ielts</MenuItem>
                          <MenuItem value={2}>Toeic</MenuItem>
                          <MenuItem value={3}>Basic Communication</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <FormControl className='w-full' size='small'>
                        <InputLabel htmlFor='counselor-label'>Counselor</InputLabel>
                        <Select defaultValue='1' input={<OutlinedInput label='Counselor' name='counselor' onChange={handleChange} />}>
                          <MenuItem value={1}>Tăng Khánh Chương</MenuItem>
                          <MenuItem value={2}>Trần Phương Duy</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <div className='flex p-4'>
                    <h4 className='m-0'>Placement Test</h4>
                  </div>
                  <Divider className='mb-6' />
                  <Grid className='mb-4' container item spacing={6}>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <TextField
                        id='date'
                        label='Placement Test Date'
                        name='placementTestDate'
                        type='date'
                        className='w-full'
                        size='small'
                        defaultValue='2017-05-24'
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <TextField
                        id='time'
                        label='Placement Test Time'
                        name='placementTestTime'
                        type='time'
                        defaultValue='07:30'
                        className='w-full'
                        size='small'
                        InputLabelProps={{
                          shrink: true
                        }}
                        inputProps={{
                          step: 300
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid className='mb-4' container item spacing={6}>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <TextField name='result' className='w-full' id='outlined-basic' label='Result' size='small' variant='outlined' type='number' />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <TextField name='evaluation' className='w-full' disabled id='outlined-basic' label='Evaluation' size='small' variant='outlined' />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <TextField name='suitableCourse' className='w-full' disabled id='outlined-basic' label='Suitable Course' size='small' variant='outlined' />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6}>
                      <FormControl className='w-full' size='small'>
                        <InputLabel htmlFor='suitable-class' id='suitable-class-label'>Suitable Class</InputLabel>
                        <Select defaultValue='1' input={<OutlinedInput label='Suitable Class' name='suitableClass' onChange={handleChange} />}>
                          <MenuItem value={1}>IE70.1 / 2,4,6 / 15:30PM-17:00PM</MenuItem>
                          <MenuItem value={2}>IE70.2 / 3,5,7 / 15:30PM-17:00PM</MenuItem>
                          <MenuItem value={3}>IE70.3 / 2,5,7 / 15:30PM-17:00PM</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default EnrollFirstCourse
