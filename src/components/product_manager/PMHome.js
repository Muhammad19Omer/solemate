import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AccountCircle } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import PMHeader from './PMHeader';
import { useNavigate } from "react-router-dom";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

function PMHome() {
    let navigate = useNavigate(); 

    const handleProductClick = () =>{ 
        let path = '/manageProducts'; 
        navigate(path);
    }

    const handleDeliveryClick = () => {
        let path = '/manageDeliveries'
        navigate(path);
    }

    const handleCommentClick = () => {
        let path = '/manageComments'
        navigate(path);
    }

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Typography variant='h4' align='center' padding={5}>Welcome Product Manager, name</Typography>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={7} paddingTop={5}>
                        <Grid key='0' item>
                        <Button onClick={handleProductClick}>
                            <Paper direction='column' justifyContent='center'
                            sx={{
                                padding: '30px',
                                backgroundColor: 'secondary.light'
                            }}
                            >
                            <Typography variant='h1' align='center'>
                                <InventoryIcon fontSize='50'></InventoryIcon>
                            </Typography>
                            
                            <Typography variant='h6' align='center'> Manage Products </Typography>
                            </Paper>
                        </Button> 
                        </Grid>
                        <Grid key='1' item>
                        <Button onClick={handleDeliveryClick}>
                            <Paper direction='column' justifyContent='center'
                            sx={{
                                padding: '30px',
                                backgroundColor: 'secondary.light'
                            }}
                            >
                            <Typography variant='h1' align='center'>
                                <LocalShippingIcon fontSize='50'></LocalShippingIcon>
                            </Typography>
                            
                            <Typography variant='h6' align='center'> Manage Deliveries </Typography>
                            </Paper>
                        </Button>
                        </Grid>
                        <Grid key='2' item>
                        <Button onClick={handleCommentClick}>
                            <Paper direction='column' justifyContent='center'
                            sx={{
                                padding: '30px',
                                backgroundColor: 'secondary.light'
                            }}
                            >
                            <Typography variant='h1' align='center'>
                                <CommentBankIcon fontSize='50'></CommentBankIcon>
                            </Typography>
                            
                            <Typography variant='h6' align='center'> Manage Comments </Typography>
                            </Paper>
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        
    )
}

export default PMHome