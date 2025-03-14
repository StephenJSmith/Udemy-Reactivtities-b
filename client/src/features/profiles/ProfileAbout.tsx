import { Box, Typography, Button, Divider } from '@mui/material';
import { useParams } from 'react-router';
import { useProfile } from '../../lib/hooks/useProfile';

const ProfileAbout = () => {
  const { id } = useParams();
  const { profile } = useProfile(id);

  return (
      <Box>
          <Box display='flex' justifyContent='space-between'>
              <Typography variant="h5">About {profile?.displayName}</Typography>
              <Button>
                  Edit profile
              </Button>
          </Box>
          <Divider sx={{my: 2}} />
          <Box sx={{overflow: 'auto', maxHeight: 350}}>
              <Typography variant="body1" sx={{whiteSpace: 'pre-wrap'}}>
                  {profile?.bio || 'No description added yet'}
              </Typography>
          </Box>
      </Box>
  )}

export default ProfileAbout;
