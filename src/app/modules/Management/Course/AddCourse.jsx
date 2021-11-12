import React, { useRef } from 'react'
import { Formik } from 'formik'
import {
  Grid, Card, Divider, TextField, Button,
  Icon, FormControl, MenuItem, Select,
  InputLabel,
  OutlinedInput
} from '@mui/material'
import _ from 'lodash'

import { Breadcrumb, NumberField } from 'app/components'
import ClassesInCourse from './ClassesInCourse'
import useUploadImage from 'app/hooks/useUploadImage'

const AddCourse = () => {
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
            { name: 'Courses', path: '/courses/add' },
            { name: 'Add Course' }
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
        <Grid item lg={6}>
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
                  <Grid container spacing={6}>
                    <Grid item lg={12} md={3} sm={6} xs={6}>
                      <div className='flex p-4'>
                        <h4 className='m-0'>Course Information</h4>
                      </div>
                      <Divider className='mb-6' />
                      <Grid className='mb-4' container item spacing={6}>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <FormControl className='w-full' size='small'>
                            <InputLabel htmlFor='enrollment-program' id='enrollment-program-label'>Program</InputLabel>
                            <Select defaultValue='1' input={<OutlinedInput label='Program' name='enrollmentProgram' onChange={handleChange} />}>
                              <MenuItem value={1}>Ielts</MenuItem>
                              <MenuItem value={2}>Toeic</MenuItem>
                              <MenuItem value={3}>Basic Communication</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <FormControl className='w-full' size='small'>
                            <InputLabel htmlFor='learning-level' id='learning-level-label'>Learning Level</InputLabel>
                            <Select defaultValue='1' input={<OutlinedInput label='Learning Level' name='learningLevel' onChange={handleChange} />}>
                              <MenuItem value={1}>Basic</MenuItem>
                              <MenuItem value={2}>Intermediate</MenuItem>
                              <MenuItem value={3}>Advance</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Grid className='mb-4' container item spacing={6}>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <TextField name='courseId' className='w-full' id='outlined-basic' label='Course ID' size='small' variant='outlined' onChange={handleChange} />
                        </Grid>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <TextField name='courseName' className='w-full' id='outlined-basic' label='Course Name' size='small' variant='outlined' onChange={handleChange} />
                        </Grid>
                      </Grid>
                      <Grid className='mb-4' container item spacing={6}>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <NumberField
                            className='w-full'
                            id='outlined-basic'
                            label='Require Result'
                            size='small'
                            name='requireResult'
                            variant='outlined'
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <NumberField
                            className='w-full'
                            id='outlined-basic'
                            label='Target'
                            size='small'
                            name='target'
                            variant='outlined'
                            onChange={handleChange} />
                        </Grid>
                      </Grid>
                      <Grid className='mb-4' container item spacing={6}>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <NumberField
                            className='w-full'
                            id='outlined-basic'
                            label='Course Fee'
                            size='small'
                            name='courseFee'
                            variant='outlined'
                            onChange={handleChange} />
                        </Grid>
                      </Grid>
                      <Grid className='mb-4'>
                        <TextField
                          label='Description'
                          name='description'
                          size='small'
                          variant='outlined'
                          multiline
                          rows={6}
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <div className='flex p-4'>
                        <h4 className='m-0'>Avatar</h4>
                      </div>
                      <Divider className='mb-6' />
                      <Grid>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray', width: 300, height: 200 }} className='mb-4'>
                          <img
                            alt='avatar'
                            className='border-radius-4'
                            style={{ height: '100%' }}
                            src={avatarUrl}
                          />
                        </div>
                      </Grid>
                      <Grid>
                        <label htmlFor='upload-avatar'>
                          <Button
                            className='capitalize'
                            color='primary'
                            component='span'
                            variant='contained'
                          >
                            <div className='flex items-center'>
                              <Icon className='pr-8'>
                                cloud_upload
                              </Icon>
                              <span>Upload Your Avatar</span>
                            </div>
                          </Button>
                        </label>
                        <input
                          className='hidden'
                          onChange={handleUploadImage}
                          id='upload-avatar'
                          type='file'
                          multiple
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </Card>
        </Grid>
        <Grid item lg={6}>
          <Card elevation={3}>
            <Grid item lg={12} md={3} sm={6} xs={6}>
              <div className='flex p-4'>
                <h4 className='m-0'>Classes List</h4>
              </div>
              <Divider className='mb-6' />
              <ClassesInCourse />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddCourse
