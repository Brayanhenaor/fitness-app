import { Box, IconButton, styled } from "@mui/material"
import { NavLink } from "react-router-dom"
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import './navbar.css'
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import SearchIcon from '@mui/icons-material/Search';

const List = styled('ul')({
    display: 'flex',
    justifyContent: 'center',
    padding: 2,
    flexDirection:'column'
})

const ListItem = styled('ul')({
    display: 'flex',
    justifyContent: 'center'
})

export const Navbar = () => {
    return (
        <Box
            sx={{
                width: 80,
                backgroundColor: '#0a0a0a',
                height: '100vh'
            }}>
            <List id="navList">
                <ListItem>
                    <NavLink
                        to={'/'}>
                        {({ isActive }) => (
                            <IconButton>
                                <CottageOutlinedIcon
                                    sx={{
                                        color: isActive ? '#e8da5e' : 'white',
                                        fontSize: 40
                                    }} />
                            </IconButton>
                        )}
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink
                        to={'/routines'}>
                        {({ isActive }) => (
                            <IconButton>
                                <FitnessCenterOutlinedIcon
                                    sx={{
                                        color: isActive ? '#e8da5e' : 'white',
                                        fontSize: 40
                                    }} />
                            </IconButton>
                        )}
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink
                        to={'/search'}>
                        {({ isActive }) => (
                            <IconButton>
                                <SearchIcon
                                    sx={{
                                        color: isActive ? '#e8da5e' : 'white',
                                        fontSize: 40
                                    }} />
                            </IconButton>
                        )}
                    </NavLink>
                </ListItem>
            </List>
        </Box>
    )
}
