import { Typography, Grid2 } from '@mui/material';
import { useParams } from 'react-router';
import ProfileContent from './ProfileContent';
import ProfileHeader from './ProfileHeader';
import { useProfile } from '../../lib/hooks/useProfile';

const ProfilePage = () => {
  const {id} = useParams();
  const {profile, loadingProfile} = useProfile(id);
  if (loadingProfile) return <Typography>Loading profile...</Typography>
  if (!profile) return <Typography>Profile not found</Typography>

  return (
    <Grid2 container>
        <Grid2 size={12}>
            <ProfileHeader />
            <ProfileContent />
        </Grid2>
    </Grid2>
  )
}

export default ProfilePage;
