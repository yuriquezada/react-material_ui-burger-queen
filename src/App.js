// import logo from './logo.svg';
import './App.css';
import Products from './components/food-list';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import OrderList from './components/order-list';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Products/>
        </Grid>
        <Grid item xs={4}>
          <OrderList/>
        </Grid>
      </Grid>
    </Box>
      
    </div>
  );
}

export default App;
