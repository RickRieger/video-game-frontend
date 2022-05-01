import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import LanguageIcon from '@mui/icons-material/Language';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';

const MainListItems = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListItemButton
        style={{ color: '#008e8e' }}
        onClick={() => navigate('/')}
      >
        <ListItemIcon>
          <LanguageIcon style={{ color: '#008e8e' }} />
        </ListItemIcon>
        <ListItemText primary='Global Sales' />
      </ListItemButton>
      <ListItemButton
        style={{ color: 'rgb(209 46 190)' }}
        onClick={() => navigate('/popular-games')}
      >
        <ListItemIcon>
          <SportsEsportsIcon style={{ color: 'rgb(209 46 190)' }} />
        </ListItemIcon>
        <ListItemText primary='Popular Games' />
      </ListItemButton>
      <ListItemButton
        style={{ color: 'rgb(20 163 34)' }}
        onClick={() => navigate('/search/Grand Theft Auto')}
      >
        <ListItemIcon>
          <ContentPasteSearchIcon style={{ color: 'rgb(20 163 34)' }} />
        </ListItemIcon>
        <ListItemText primary='Search' />
      </ListItemButton>
     
    </React.Fragment>
  );
};

export default MainListItems;
