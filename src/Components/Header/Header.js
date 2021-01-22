import React from 'react';
import CSSstyle from './Header.module.css';
import BackgroundVideo from '../../assets/bg-video1.mp4';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import HowToReg from '@material-ui/icons/HowToReg';

function Header() {
    return (
      <Grid align="center" container className={CSSstyle.headerContainer}>
      <video className={CSSstyle.headerVideo} loop muted autoPlay src={BackgroundVideo} />
      <Box className={CSSstyle.headerContent}>
      <Typography variant="h4" component="h1">Here We Teach So You May Outreach
        <span className={CSSstyle.dot} >.</span>
      </Typography>
      <Typography variant="h6" component="h4">Join Sheryians to code, learn, make, and discover.</Typography>
      <Button className={CSSstyle.signUpButton} variant="contained" startIcon={<HowToReg />}>Get Started</Button>
      </Box>
      </Grid>
    )
}

export default Header;