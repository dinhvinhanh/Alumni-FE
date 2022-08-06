import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { PostDetail } from 'app/components/PostDetail';
import { Route, Switch } from 'react-router-dom';

export function PostDetailPage() {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container width={1200} spacing={12} paddingY={5}>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className={'uppercase text-red-900 font-bold px-3 md:px-0'}
          >
            {[
              <a href={'/dashboard'}>admin</a>,
              <a href={'/dashboard'}>user</a>,
            ]}
          </Breadcrumbs>
        </Grid>
        <Grid item xl={12} style={{ paddingTop: '20px' }} xs={12} sm={12}>
          <Switch>
            <Route path="/post/:slug" component={PostDetail} />
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
};