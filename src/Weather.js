import { Card } from "@mui/material"
import { Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { Box } from '@mui/material'

function Weather({ weatherObj, isCelcius }) {


    return (
        <Box 
            sx={{
                margin: '0 auto',
                width: '500px',
            }}
        >
            <Card
                sx={{
                    m: 1,
                    border: 1,
                    borderColor: grey,
                    padding: '1rem'
                }}
            >
                <img src={weatherObj.day.condition.icon} alt='Weather Icon' />
                <Typography variant='h6'>{weatherObj.date}</Typography>
                <Typography variant='p'>{weatherObj.day.condition.text}  </Typography>
                <Typography variant='p'>{isCelcius ? weatherObj.day.avgtemp_c : weatherObj.day.avgtemp_f}&deg; {isCelcius ? 'C' : 'F'}</Typography>
            </Card>
        </Box>
    )
}

export default Weather