import React from 'react'
import { Paper } from '@mui/material';


export const Item = ({ title, url }) => {
  return (
    <Paper className='bg-red-300 '>
          <div className="min-h-40 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                <img
                src={url}
                alt={title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
    </Paper>
  )
}
