import React from 'react';

const Tools = {
    'generateKey':()=> Math.floor( Math.random() * new Date().getTime() +1),
} 

export default Tools;