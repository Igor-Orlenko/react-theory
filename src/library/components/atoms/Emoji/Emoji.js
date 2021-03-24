/** @jsxRuntime classic */
/** @jsx jsx */
// import './Emoji.css'
import { jsx, css, keyframes } from '@emotion/react'
import React from 'react';

export const Emoji =  () => {
    const bounce = keyframes`
        from, 20%, 53%, 80%, to {
            transform: translate3d(0,0,0);
        }

        40%, 43% {
            transform: translate3d(0, -30px, 0);
        }

        70% {
            transform: translate3d(0, -15px, 0);
        }

        90% {
            transform: translate3d(0,-4px,0);
        }
`
    return(
        <p
        css={css`
            animation: ${bounce} 1s ease infinite;
       `}
        >
            {'\u2728'}
        </p>
    );
};
    