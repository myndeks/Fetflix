import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';


const DEFAULT_STATE = {
  favorites: []
}

function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "CONTENT/TOGGLE_FAVORITE":
      const { favorites } = state;
      if (favorites.includes(action.id)) {
        return { ...state, favorites:  favorites.filter((item) => item !== action.id) };
      } else {
        return { ...state, favorites: favorites.concat(action.id) };
      }
      default:
    return state;

  }
}

export default reducer;
