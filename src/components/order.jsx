import React from 'react';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AlarmIcon from '@mui/icons-material/Alarm';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { CardActionArea, CardActions } from '@mui/material';

function OrderItem() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardMedia
                component="img"
                height="80"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="delete">
            <RemoveCircleIcon />
          </IconButton>
          <Typography gutterBottom variant="h5" component="div">
                n
          </Typography>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddCircleIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
}

export default OrderItem
