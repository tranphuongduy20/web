import React, { useRef } from 'react'
import { Formik } from 'formik'
import {
  Grid, Card, Divider, TextField, Button,
  Icon, FormControl, MenuItem, Select,
  InputLabel,
  OutlinedInput
} from '@mui/material'

import { Breadcrumb, NumberField } from 'app/components'
import useUploadImage from 'app/hooks/useUploadImage'
import StudentsInClass from './StudentsInClass'
import InstructorsInClass from './InstructorsInClass'
import ScheduleTable from './ScheduleTable'

const AddClass = () => {
  const formRef = useRef()
  const { imageUrl: avatarUrl, imageFile: avatarFile, handleUploadImage } = useUploadImage({ type: 'horizontal' })

  const initialValues = {

  }

  const handleSubmit = async (values, { isSubmitting }) => {
    const combinedValues = { ...values, avatar: avatarFile }
    console.log(combinedValues)
  }

  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Classes', path: '/classes/add' },
            { name: 'Add Class' }
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
              innerRef={formRef}
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
                <form className='p-4' onSubmit={handleSubmit}>
                  <Grid container spacing={6}>
                    <Grid item lg={12} md={3} sm={6} xs={6}>
                      <div className='flex p-4'>
                        <h4 className='m-0'>Class Information</h4>
                      </div>
                      <Divider className='mb-6' />
                      <Grid className='mb-4' container item spacing={6}>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <FormControl className='w-full' size='small'>
                            <InputLabel htmlFor='enrollment-program' id='enrollment-program-label'>Program</InputLabel>
                            <Select defaultValue='1' input={<OutlinedInput label='Program' name='program' onChange={handleChange} />}>
                              <MenuItem value={1}>Ielts</MenuItem>
                              <MenuItem value={2}>Toeic</MenuItem>
                              <MenuItem value={3}>Basic Communication</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Grid className='mb-4' container item spacing={6}>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <FormControl className='w-full' size='small'>
                            <InputLabel htmlFor='course-id' id='course-id-label'>Course ID</InputLabel>
                            <Select defaultValue='1' input={<OutlinedInput label='Course ID' name='courseId' onChange={handleChange} />}>
                              <MenuItem value={1}>IE50</MenuItem>
                              <MenuItem value={2}>IE55</MenuItem>
                              <MenuItem value={3}>IE70</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <TextField disabled name='courseName' className='w-full' id='outlined-basic' label='Course Name' size='small' variant='outlined' />
                        </Grid>
                      </Grid>
                      <Grid className='mb-4' container item spacing={6}>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <NumberField name='requireResult' className='w-full' id='outlined-basic' label='Require Result' size='small' variant='outlined' onChange={handleChange} />
                        </Grid>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <NumberField name='target' className='w-full' id='outlined-basic' label='Target' size='small' variant='outlined' onChange={handleChange} />
                        </Grid>
                      </Grid>
                      <Grid className='mb-4' container item spacing={6}>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <TextField name='classId' className='w-full' id='outlined-basic' label='Class ID' size='small' variant='outlined' onChange={handleChange} />
                        </Grid>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <TextField name='className' className='w-full' id='outlined-basic' label='Class Name' size='small' variant='outlined' onChange={handleChange} />
                        </Grid>
                      </Grid>
                      <Grid className='mb-4' container item spacing={6}>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <NumberField name='numOfLessons' className='w-full' id='outlined-basic' label='Number of lessons' size='small' variant='outlined' onChange={handleChange} />
                        </Grid>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <NumberField name='hoursPerLesson' className='w-full' id='outlined-basic' label='Hours per lesson' size='small' variant='outlined' onChange={handleChange} />
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
                        <h4 className='m-0'>Schedule</h4>
                      </div>
                      <Divider className='mb-6' />
                      <Grid className='mb-4' container item spacing={6}>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <TextField
                            id='date'
                            label='Begin At'
                            name='beginAt'
                            type='date'
                            className='w-full'
                            size='small'
                            defaultValue='2017-05-24'
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </Grid>
                        <Grid item lg={6} md={3} sm={6} xs={6}>
                          <TextField
                            id='date'
                            label='End At'
                            name='endAt'
                            type='date'
                            className='w-full'
                            size='small'
                            defaultValue='2017-05-24'
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid className='mb-4' container item spacing={6}>
                        <Grid item lg={12} md={3} sm={6} xs={6}>
                          <ScheduleTable
                            name='schedule'
                            values={values}
                            setFieldValue={setFieldValue}
                            handleChange={handleChange}
                          />
                        </Grid>
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
          <Card elevation={1} className='mb-4'>
            <Grid item lg={12} md={3} sm={6} xs={6}>
              <div className='flex p-4'>
                <h4 className='m-0'>Enrolled Students</h4>
              </div>
              <Divider className='mb-6' />
              <StudentsInClass />
            </Grid>
          </Card>
          <Card elevation={1}>
            <Grid item lg={12} md={3} sm={6} xs={6}>
              <div className='flex p-4'>
                <h4 className='m-0'>Instructors</h4>
              </div>
              <Divider className='mb-6' />
              <InstructorsInClass />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddClass
