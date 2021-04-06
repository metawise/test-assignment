import React from "react";
import styled from "styled-components/macro";
import Button from '@material-ui/core/Button';
import { ReactComponent as OptiwattLogo } from "../../vendor/optiwatt.svg";
import { Helmet } from "react-helmet-async";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import {
  Box,
  Grid,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);

const OptiwattButton = styled(OptiwattLogo)`
  width: 100%;
  vertical-align: middle;
  display: inline;
`;
function ButtonLogo() {
  return (
    <Box mb={10}>
      <OptiwattButton />
    </Box>
  );
}

function AuthorizeButtons() {
  const style = {
    backgroundColor: '#AF4BFB',
    borderRadius: '20px',
    width: '128px',
  }
  const style2 = {
    width: '128px',
    color: '#AF4BFB',
  }
  return (
    <Box p={2} display="flex" justifyContent="left">
      <Button
          type="submit"
          variant="contained"
          color="primary"
        className="brand-submit-button"
        style={style}
        >
        Authorize
        </Button>
      <Button
          type="button"
        className="brand-text-color"
        style={style2}
        >
        Skip for Later
        </Button>
      
    </Box>
  );
}

function TableOfContents() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Support Your Local Grid
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        <ul>
          <li>
            <Typography>
              Help reduce CO2 and grid blackouts by delaying charging
              during high electricity demand.
            </Typography>
          </li>
          <li>
            <Typography>
              Optiwatt will notify you prior to these rare events
              and automatically resume charging immediately afterwards.
            </Typography>
          </li>
          <li>
            <Typography>
              You can opt-out at anytime.
            </Typography>
          </li>
        </ul>
      </Typography>
    </Box>
  );
}

const Wrapper = styled.div`
  padding: ${(props) => props.theme.spacing(1) / 4}px
    ${(props) => props.theme.spacing(4)}px;
  background: ${(props) => props.theme.footer.background};
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 50px;
  border-radius: 8px;
`;

const pgeList = [
  { id: 1, title: 'SDG&E' },
  { id: 2, title: 'SF PG&E' },
  { id: 3, title: 'Los Angeles PG&E' },
]

function Dashboard(props) {
  return (
    <React.Fragment>
      <Helmet title="Dashboard" />

      <Wrapper>
        <Grid container spacing={6} justify="center">
        <Grid item xs={12} lg={12} xl={12}>
          <Typography variant="h2" align="center" gutterBottom display="block">
            Select Utility
          </Typography>
          <Typography variant="body1" align="center" gutterBottom display="block">
            Select your utility provider
          </Typography>

          <Autocomplete
              id="combo-box-demo"
              multiple
              options={pgeList}
              renderTags={options => 
              {
                options.length > 1 && options.shift();
                return (options.map((option, index) =>
                  <React.Fragment key={ index }><span><CheckCircleIcon style={{ color: '#00D73F', marginRight: '8px'}}/> </span>{option.title}</React.Fragment>))
              }}
              
              renderOption={option => {
                  return (
                      <React.Fragment><span><CheckCircleIcon style={{color: '#00D73F', marginRight: '8px'}}/> </span>{option.title}</React.Fragment>
                  );
              }}
              getOptionLabel={(option) => option.title}
            style={{ marginTop: '20px', marginBottom: '30px' }}
            renderInput={(params) => <TextField {...params} />}
          />

          <ButtonLogo />
          <TableOfContents />
          <AuthorizeButtons />

            <Typography variant="body1" display="block" style={{ marginTop: '20px', fontSize: '8px', width: '60%'}}>
            By click Authorize, Leap, our 3rd party provider, will connect to your utility company meter and enable Outwatt to support the grid.
          </Typography>

        </Grid>
      </Grid>
        </Wrapper>
    </React.Fragment>
  );
}

export default Dashboard;
