import { Profile } from '@/components/Profile/Profile';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <Profile
      open={true}
      onClose={() => navigate(-1)}
    />
  );
};
