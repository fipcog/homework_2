import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 150,
                '& .MuiSlider-rail': {
                    color: '#8B8B8B'
                },
                '& .MuiSlider-track': {
                    color: 'rgb(0, 204, 34)'
                },
                '& .MuiSlider-thumb': {
                    color: '#fff',
                    border: 1,
                    borderColor: '#0C2',
                    background: 'radial-gradient(circle, rgb(0, 204, 34) 25%, rgba(255,255,255,1) 25%)',
                    '&:hover': {
                        boxShadow: '0 0 0 6px rgba(0, 204, 34 , 0.16)'
                    }
                },
                '& .Mui-focusVisible': {
                    boxShadow: '0 0 0 6px rgba(0, 204, 34 , 0.16)'
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
