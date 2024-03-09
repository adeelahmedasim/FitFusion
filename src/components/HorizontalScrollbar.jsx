import React, { useContext, useRef } from 'react';
//import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';



const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const menuRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      menuRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    } else {
      menuRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };
  return (

    <div style={{display:'flex', flexDirection:'row', overflow:'hidden'}}>

<IconButton onClick={() => scroll('left')} aria-label="scroll left">
      <img src={LeftArrowIcon} alt="Left-Arrow" />
      </IconButton>
     
      <Box
        ref={menuRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}
      >
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}

    </Box>

<IconButton onClick={() => scroll('right')} aria-label="scroll right">
      <img src={RightArrowIcon} alt="RightArrow" />
      </IconButton>

      
    </div>
  )  
  };

export default HorizontalScrollbar;
