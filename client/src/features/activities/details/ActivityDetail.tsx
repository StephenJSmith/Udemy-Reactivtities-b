import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Activity } from "../../../lib/types";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
  selectedActivity: Activity;
  cancelSelectActivity: () => void
  openForm: (id: string) => void
};

const ActivityDetail = ({ selectedActivity, cancelSelectActivity, openForm: openform }: Props) => {
  const {activities} = useActivities();
  const activity = activities?.find((activity) => activity.id === selectedActivity.id);

  if (!activity) return <Typography>Loading...</Typography>;

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => openform(activity.id)} color="primary">Edit</Button>
        <Button onClick={cancelSelectActivity} color="inherit">Cancel</Button>
      </CardActions>{" "}
    </Card>
  );
};

export default ActivityDetail;
