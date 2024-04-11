import React from 'react';
import Grid from '@mui/material/Grid';

interface TwoColumnLayoutProps {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ leftColumn, rightColumn }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} order={{ xs: 2, sm: 1 }}>
        <div style={{ padding: 20 }}>
        { leftColumn }
        </div>
      </Grid>
      <Grid item xs={12} sm={8} order={{ xs: 1, sm: 2 }}>
        <div style={{ padding: 20 }}>
        { rightColumn }
        </div>
      </Grid>
    </Grid>
  );
}

export default TwoColumnLayout;
