import React, { useState } from 'react'
import { Formik } from 'formik'
import {
  Grid, Divider, TextField, Button,
  FormControl, MenuItem, Select,
  InputLabel, OutlinedInput
} from '@mui/material'

const StudentEnrollment = () => {
  const initialValues = {

  }

  const [files, setFiles] = useState([])


  const handleSingleRemove = (index) => {
    let tempList = [...files]
    tempList.splice(index, 1)
    setFiles([...tempList])
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
          {/* <Grid className='mb-4' item>
            <TextField
              label='Comment'
              name='comment'
              size='small'
              variant='outlined'
              multiline
              rows={6}
              fullWidth
              value={values.terms_conditions}
              onChange={handleChange}
            />
          </Grid> */}
        </form>
      )}
    </Formik>
  )
}

export default StudentEnrollment
