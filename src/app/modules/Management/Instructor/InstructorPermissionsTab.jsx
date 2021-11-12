import React from 'react'
import { Grid, Divider, Checkbox } from '@mui/material'

const IntructorPermissionsTab = ({ instructorRules }) => {
  const handleChecked = (e, a, b) => {
    console.log(e.target.value, a, b)
  }

  return (
    <>
      {
        instructorRules.map(({ id, title, rules }) => (
          <div key={id}>
            <div className='flex p-4'>
              <h5 className='m-0'>{title}</h5>
            </div>
            <Divider />
            {
              rules.map(rule => (
                <div className='px-4 py-2' key={rule.id}>
                  <Grid
                    container
                    spacing={2}
                    justify='center'
                    alignItems='center'
                    direction='row'
                  >
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                      {rule.text}
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                      <Checkbox value={rule.id} onChange={handleChecked} />
                    </Grid>
                  </Grid>
                </div>
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export default IntructorPermissionsTab
