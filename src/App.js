// Import Buttons and necessary materials
import { Button, Typography } from "@mui/material";
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

function App() {
  return (
    <div>
       
      <Button 
      startIcon={<VideoCameraFrontIcon/>} 
      variant="contained" 
      color="secondary" 
      size="small"
      >
        Camera Options
      </Button>

      <Button 
      startIcon={<KeyboardVoiceIcon/>} 
      variant="contained" 
      color="success" 
      size="small"
      >
        Audio Options
      </Button>

      <Button 
      startIcon={<VolumeUpIcon/>} 
      variant="contained" 
      color="secondary" 
      size="small"
      >
        Audio Options
      </Button>

      <Typography variant="h5" component="h2">
        Ready to join?
      </Typography>

      <Typography variant="subtitle2" component="h2">
        ___ is in the call
      </Typography>
      
      <Typography variant="subtitle2" component="h2">   
        Other joining options 
      </Typography> 

      <Button variant="contained" sx={{ // Join now Button
        backgroundColor:"darkred", 
        color:"white",
        margin:5,
        "&:hover":{
          backgroundColor:"darkred"
        } 
      }}>Join now</Button>
      
      <Button variant="outlined"sx={{   // Present Button
        backgroundColor:"white",
        borderColor:"darkred",
        color:"darkred",
        margin:5,
        "&:hover":{
          backgroundColor:"white",
        } 
      }}>Present</Button>

      <Button
      startIcon={<MicIcon/>}    // Mic On/Off Button
      variant="outlined"sx={{
        width: '50px', // Adjust the size as needed
        height: '50px', // Adjust the size as needed
        borderRadius: '50%', // Makes the button circular
        backgroundColor: 'transparent', // Clear background
        borderColor: 'black', // Black border
        color: 'black', // Black text color
        '&:hover': {
          backgroundColor: 'white', // White background on hover
          color: 'darkred', // Text color on hover
        }
      }}></Button>

      <Button
      startIcon={<VideocamIcon/>}   // Camera On/Off Button
      variant="outlined"sx={{
        width: '50px', // Adjust the size as needed
        height: '50px', // Adjust the size as needed
        borderRadius: '50%', // Makes the button circular
        backgroundColor: 'transparent', // Clear background
        borderColor: 'black', // Black border
        color: 'black', // Black text color
        '&:hover': {
          backgroundColor: 'white', // White background on hover
          color: 'darkred', // Text color on hover
        }
      }}></Button>
    </div>
  );
}

export default App;
