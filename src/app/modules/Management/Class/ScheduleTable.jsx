import React from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
  IconButton,
  Icon,
  Select,
  MenuItem,
  FormControl
} from '@mui/material'
import { FieldArray } from 'formik'

const daysInWeeks = [
  {
    id: 1,
    value: 'Monday'
  },
  {
    id: 2,
    value: 'Tuesday'
  },
  {
    id: 3,
    value: 'Wednesday'
  },
  {
    id: 4,
    value: 'Thursday'
  },
  {
    id: 5,
    value: 'Friday'
  },
  {
    id: 6,
    value: 'Saturday'
  },
  {
    id: 7,
    value: 'Sunday'
  }
]

const ScheduleTable = ({ values, handleChange, setFieldValue, name }) => {

  return (
    <FieldArray name='items'>
      {(arrayHelpers) => (
        <div>
          <Table className='whitespace-pre'>
            <TableHead>
              <TableRow>
                <TableCell colSpan={7}>Day</TableCell>
                <TableCell colSpan={2}>Begin At</TableCell>
                <TableCell colSpan={2}>End At</TableCell>
                <TableCell
                  colSpan={1}
                  className='p-0'
                  align='center'
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {values.items?.map((item, ind) => (
                <TableRow
                  className='position-relative'
                  key={ind}
                >
                  <TableCell
                    colSpan={7}
                    className='p-0'
                    align='left'
                  >
                    <FormControl className='w-full' size='small'>
                      <Select name={`items[${ind}].day`} defaultValue='1' onChange={handleChange}>
                        {
                          daysInWeeks.map((day, index) => (
                            <MenuItem value={day.id} key={day.id}>{day.value}</MenuItem>
                          ))
                        }
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    className='p-0'
                    align='left'
                  >
                    <TextField
                      id='date'
                      name={`items[${ind}].beginAt`}
                      className='w-full'
                      size='small'
                      type='time'
                      onChange={handleChange}
                      defaultValue='00:00:00'
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    className='p-0'
                    align='center'
                  >
                    <TextField
                      id='date'
                      name={`items[${ind}].endAt`}
                      className='w-full'
                      size='small'
                      type='time'
                      onChange={handleChange}
                      defaultValue='00:00:00'
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    className='p-0'
                    align='center'
                  >
                    <IconButton
                      size='small'
                      onClick={() =>
                        arrayHelpers.remove(ind)
                      }
                    >
                      <Icon
                        color='error'
                        fontSize='small'
                      >
                        clear
                      </Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            className='mt-4'
            color='primary'
            variant='contained'
            size='small'
            onClick={() => arrayHelpers.push({})}
          >
            + Add A New Day
          </Button>
        </div>
      )}
    </FieldArray>
  )
}

export default ScheduleTable
