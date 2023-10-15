import React, { useMemo } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import TinderCard from 'react-tinder-card';
import { IconButton } from "@mui/material";
import "./TinderCards.js";
import "./SwipeButtons.css";
import database from './firebase';
import { useState, useRef } from 'react';
import { dblClick } from '@testing-library/user-event/dist/click';

const SwipeButtons = () => {

    let r = 0;
    let l = 0;
    function right() {
        
        r+=1;
      } 
    function left() {
        l+=0;
    }

    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__left" onClick={right}>
                <CloseIcon fontSize="200px" />
            </IconButton>

            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="200px" />
            </IconButton>

            <IconButton className="swipeButton__right"onClick={left}>
                <FavoriteIcon fontSize="200px" />

            </IconButton>
        </div>   
    )
}

export default SwipeButtons