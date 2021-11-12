import React, { useState } from 'react'
import { Formik } from 'formik'

import { Breadcrumb, NumberField } from 'app/components'
import {
  Grid, Divider, TextField, Button,
  Icon, FormControl, MenuItem, Select,
  InputLabel, Card
} from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'

import useUploadImage from 'app/hooks/useUploadImage'

const AddStudent = () => {
  const { imageUrl: avatarUrl, imageFile: avatarFile, handleUploadImage } = useUploadImage({ type: 'horizontal' })

  const initialValues = {

  }

  const [additionalDocuments, setAdditionalDocuments] = useState([])

  const handleSelectAdditionalDocuments = (event) => {
    let uploadedFiles = event.target.files
    let list = [...additionalDocuments]

    for (const iterator of uploadedFiles) {
      list.push({
        file: iterator,
        uploading: false,
        error: false,
        progress: 0,
      })
    }

    setAdditionalDocuments(list)
  }

  const handleSingleRemove = (index) => {
    let tempList = [...additionalDocuments]
    tempList.splice(index, 1)
    setAdditionalDocuments([...tempList])
  }


  const handleSubmit = async (values, { isSubmitting }) => {
    const combinedValues = _.omitBy({ ...values, avatar: avatarFile, additionalDoc: additionalDocuments }, _.isUndefined)
    console.log(combinedValues)
  }

  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Students', path: '/students/add' },
            { name: 'Add Student' }
          ]}
        />
      </div>
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
            <Grid container justifyContent='flex-end' >
              <Button
                color='primary'
                variant='contained'
                type='submit'
                className='m-2 mb-4'
              >
                Save
              </Button>
            </Grid>
            <Card elevation={3}>
              <Grid container spacing={6} className='p-4'>
                <Grid item lg={6} md={3} sm={6} xs={6}>
                  <div className='flex p-4'>
                    <h4 className='m-0'>Personal Information</h4>
                  </div>
                  <Divider className='mb-6' />
                  <Grid className='mb-4' container item spacing={6}>
                    <Grid item lg={6} md={3} sm={6} xs={6}>
                      <TextField name='firstName' className='w-full' id='outlined-basic' label='First Name' size='small' variant='outlined' onChange={handleChange} />
                    </Grid>
                    <Grid item lg={6} md={3} sm={6} xs={6}>
                      <TextField name='lastName' className='w-full' id='outlined-basic' label='Last Name' size='small' variant='outlined' onChange={handleChange} />
                    </Grid>
                  </Grid>
                  <Grid className='mb-4' container item spacing={6}>
                    <Grid item lg={6} md={3} sm={6} xs={6}>
                      <FormControl className='w-full' size='small'>
                        <InputLabel htmlFor='grouped-select'>Gender</InputLabel>
                        <Select defaultValue='1' id='grouped-select' label='Grouping' name='gender' onChange={handleChange}>
                          <MenuItem value={1}>Male</MenuItem>
                          <MenuItem value={2}>Female</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item lg={6} md={3} sm={6} xs={6}>
                      <TextField
                        label='Birthday'
                        name='birthday'
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
                    <Grid item lg={6} md={3} sm={6} xs={6}>
                      <TextField name='email' className='w-full' id='outlined-basic' label='Email Address' size='small' variant='outlined' onChange={handleChange} />
                    </Grid>
                    <Grid item lg={6} md={3} sm={6} xs={6}>
                      <NumberField name='phone' className='w-full' id='outlined-basic' label='Phone' size='small' variant='outlined' onChange={handleChange} />
                    </Grid>
                  </Grid>
                  <Grid className='mb-4' container item spacing={6}>
                    <Grid item lg={6} md={3} sm={6} xs={6}>
                      <TextField name='addressDetail' className='w-full' id='outlined-basic' label='Address detail' size='small' variant='outlined' onChange={handleChange} />
                    </Grid>
                    <Grid item lg={6} md={3} sm={6} xs={6}>
                      <TextField name='province' className=' w-full' id='outlined-basic' label='Province' size='small' variant='outlined' onChange={handleChange} />
                    </Grid>
                  </Grid>
                  <Grid className='mb-4' container item spacing={6}>
                    <Grid item lg={6} md={3} sm={6} xs={6}>
                      <TextField name='city' className='w-full' id='outlined-basic' label='City' size='small' variant='outlined' onChange={handleChange} />
                    </Grid>
                    <Grid item lg={6} md={3} sm={6} xs={6}>
                      <TextField name='country' className='w-full' id='outlined-basic' label='Country' size='small' variant='outlined' onChange={handleChange} />
                    </Grid>
                  </Grid>
                  <div className='flex p-4'>
                    <h4 className='m-0'>More Information</h4>
                  </div>
                  <Divider className='mb-5' />
                  <Grid className='mb-4'>
                    <TextField
                      label='Terms & Conditions'
                      name='termsConditions'
                      size='small'
                      variant='outlined'
                      multiline
                      rows={6}
                      fullWidth
                      value={values.terms_conditions}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid item lg={6} md={3} sm={6} xs={6}>
                  <div className='flex p-4'>
                    <h4 className='m-0'>Avatar</h4>
                  </div>
                  <Divider className='mb-6' />
                  <Grid>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray', width: 200, height: 250 }} className='mb-4'>
                      <img
                        alt='avatar'
                        className='border-radius-4'
                        style={{ width: '100%' }}
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
                    />
                  </Grid>
                  <div className='flex p-4 mt-3'>
                    <h4 className='m-0'>Upload Additional Documents</h4>
                  </div>
                  <Divider className='mb-6' />
                  <Grid>
                    <label htmlFor='upload-multiple-file'>
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
                          <span>Upload Files</span>
                        </div>
                      </Button>
                    </label>
                    <input
                      className='hidden'
                      onChange={handleSelectAdditionalDocuments}
                      id='upload-multiple-file'
                      type='file'
                      multiple
                    />
                  </Grid>
                  {additionalDocuments.map((item, index) => {
                    let { file, uploading, error, progress } = item
                    return (
                      <div className='px-4 py-4' key={file.name + uuidv4()}>
                        <Grid
                          container
                          spacing={2}
                          justify='center'
                          alignItems='center'
                          direction='row'
                        >
                          <Grid item lg={4} md={4} sm={12} xs={12}>
                            {file.name}
                          </Grid>
                          <Grid item lg={1} md={1} sm={12} xs={12}>
                            {error && (
                              <Icon color='error'>error</Icon>
                            )}
                            {/* {uploading && <Icon className='text-green'>done</Icon>} */}
                          </Grid>
                          <Grid item lg={4} md={4} sm={12} xs={12}>
                            <div>
                              <Button
                                variant='contained'
                                size='small'
                                className='bg-error'
                                onClick={() =>
                                  handleSingleRemove(index)
                                }
                              >
                                Remove
                              </Button>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    )
                  })}
                </Grid>
              </Grid>
            </Card>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddStudent
