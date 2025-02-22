import { useEffect, useState } from "react";
import "./App.css";
import { Activity } from "./lib/types";
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from "axios";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const url = "https://localhost:5001/api/activities";
    axios<Activity[]>(url)
      .then((response) => setActivities(response.data));
  }, []);

  return (
    <>
      <Typography variant="h3">Reactivities</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
