import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OrderItem from './order';

function OrderList() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <OrderItem/>
            </Grid>
            <Grid item xs={12}>
                <OrderItem/>
            </Grid>
            <Grid item xs={12}>
                <OrderItem/>
            </Grid>
            <Grid item xs={12}>
                <OrderItem/>
            </Grid>
          </Grid>
        </Box>
    )
}

export default OrderList
