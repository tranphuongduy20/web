import React, { useState } from 'react'
import { Formik } from 'formik'
// import { styled } from '@mui/material/styles'
import {
	Grid, Card, Divider, TextField, Button,
	Icon, FormControl, MenuItem, Select, InputLabel,
	// Tab, Tabs
} from '@mui/material'
// import { TabContext, TabPanel } from '@mui/lab'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'

// import IntructorPermissionsTab from './InstructorPermissionsTab'
// import { homeRules, schedulingRules } from './rules'
import { Breadcrumb, NumberField } from 'app/components'
import useUploadImage from 'app/hooks/useUploadImage'

// const AntTabs = styled(Tabs)({
// 	borderBottom: '1px solid #e8e8e8',
// 	'& .MuiTabs-indicator': {
// 		backgroundColor: '#1890ff',
// 	},
// })

// const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
// 	textTransform: 'none',
// 	minWidth: 0,
// 	[theme.breakpoints.up('sm')]: {
// 		minWidth: 0,
// 	},
// 	fontWeight: theme.typography.fontWeightRegular,
// 	marginRight: theme.spacing(1),
// 	color: 'rgba(0, 0, 0, 0.85)',
// 	fontFamily: [
// 		'-apple-system',
// 		'BlinkMacSystemFont',
// 		'"Segoe UI"',
// 		'Roboto',
// 		'"Helvetica Neue"',
// 		'Arial',
// 		'sans-serif',
// 		'"Apple Color Emoji"',
// 		'"Segoe UI Emoji"',
// 		'"Segoe UI Symbol"',
// 	].join(','),
// 	'&:hover': {
// 		color: '#40a9ff',
// 		opacity: 1,
// 	},
// 	'&.Mui-selected': {
// 		color: '#1890ff',
// 		fontWeight: theme.typography.fontWeightMedium,
// 	},
// 	'&.Mui-focusVisible': {
// 		backgroundColor: '#d1eaff',
// 	},
// }))

const AddInstructor = () => {
	const { imageUrl: avatarUrl, imageFile: avatarFile, handleUploadImage } = useUploadImage({ type: 'veritcal' })

	const initialValues = {

	}

	const [files, setFiles] = useState([])
	// const [tabIndex, setValue] = useState('0')

	const handleFileSelect = (event) => {
		let uploadedFiles = event.target.files
		let list = [...files]

		for (const iterator of uploadedFiles) {
			list.push({
				file: iterator,
				uploading: false,
				error: false,
				progress: 0,
			})
		}

		setFiles(list)
	}

	const handleSingleRemove = (index) => {
		let tempList = [...files]
		tempList.splice(index, 1)
		setFiles([...tempList])
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
						{ name: 'Instructors', path: '/instructors/add' },
						{ name: 'Add Instructor' }
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
					<form className='p-4' onSubmit={handleSubmit}>
						<Grid container justifyContent='flex-end' >
							<Button
								color='primary'
								variant='contained'
								type='submit'
								className='mb-4'
							>
								Save
							</Button>
						</Grid>

						<Card elevation={3} className='p-4'>
							<Grid container spacing={6}>
								<Grid item lg={6} md={3} sm={6} xs={6}>
									<div className='flex p-4'>
										<h4 className='m-0'>Instructor Information</h4>
									</div>
									<Divider className='mb-6' />
									<Grid className='mb-4' container item spacing={6}>
										<Grid item lg={6} md={3} sm={6} xs={6}>
											<TextField onChange={handleChange} name='firstName' className='w-full' id='outlined-basic' label='First Name' size='small' variant='outlined' />
										</Grid>
										<Grid item lg={6} md={3} sm={6} xs={6}>
											<TextField onChange={handleChange} name='lastName' className='w-full' id='outlined-basic' label='Last Name' size='small' variant='outlined' />
										</Grid>
									</Grid>
									<Grid className='mb-4' container item spacing={6}>
										<Grid item lg={6} md={3} sm={6} xs={6}>
											<FormControl className='w-full' size='small'>
												<InputLabel htmlFor='grouped-select'>Gender</InputLabel>
												<Select name='gender' onChange={handleChange} defaultValue='1' id='grouped-select' label='Gender'>
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
									<div className='flex p-4'>
										<h4 className='m-0'>Payment Infocdfeqf</h4>
									</div>
									<Divider className='mb-4' />
									<Grid className='mb-4'>
										<TextField name='paypalEmail' className='mb-4 w-full' id='outlined-basic' label='Paypal Email' size='small' variant='outlined' onChange={handleChange} />
									</Grid>
									<div className='flex p-4'>
										<h4 className='m-0'>Certificates And Experience</h4>
									</div>
									<Divider className='mb-4' />
									<Grid className='mb-4' container item spacing={6}>
										<Grid item lg={6} md={3} sm={6} xs={6}>
											<TextField name='certificates' className='w-full' id='outlined-basic' label='Certifications' size='small' variant='outlined' onChange={handleChange} />
										</Grid>
										<Grid item lg={6} md={3} sm={6} xs={6}>
											<NumberField name='experiences' className='w-full' id='outlined-basic' label='Teaching Experiences' size='small' variant='outlined' onChange={handleChange} />
										</Grid>
									</Grid>
									<Grid className='mb-4' container item spacing={6}>
										<Grid item lg={6} md={3} sm={6} xs={6}>
											<TextField
												label='Contract From'
												name='contractFrom'
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
												label='Contract To'
												name='contractTo'
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
										onChange={handleFileSelect}
										id='upload-multiple-file'
										type='file'
										multiple
									/>
									{files.map((item, index) => {
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
									{/* <div className='flex p-4 mt-3'>
										<h4 className='m-0'>Instructor Permissions</h4>
									</div>
									<Divider className='mb-6' />
									<TabContext value={tabIndex}>
										<AntTabs value={tabIndex} onChange={handleTabChange} aria-label='ant example'>
											<AntTab value='0' label='Home' />
											<AntTab value='1' label='Schedule' />
											<AntTab value='2' label='Profiles' />
											<AntTab value='3' label='Misc' />
										</AntTabs>
										<TabPanel value='0'><IntructorPermissionsTab instructorRules={homeRules} /></TabPanel>
										<TabPanel value='1'><IntructorPermissionsTab instructorRules={schedulingRules} /></TabPanel>
										<TabPanel value='2'><IntructorPermissionsTab /></TabPanel>
										<TabPanel value='3'><IntructorPermissionsTab /></TabPanel> 
								</TabContext> */}
								</Grid>
							</Grid>
						</Card>
					</form>
				)}
			</Formik>
		</div >
	)
}

export default AddInstructor
