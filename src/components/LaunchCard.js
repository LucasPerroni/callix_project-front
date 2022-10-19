import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"

import formatDate from "../utils/formatDate"

export default function LaunchCard({ launch }) {
  const date = formatDate(launch.date_local)
  const youtubeUrl = `https://www.youtube.com/watch?v=${launch.links.youtube_id}`

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#1E1E1E", color: "white" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {launch.name}
          </Typography>

          <Typography variant="body2" color="white">
            Date (UTC): {`${date.month} ${date.day}, ${date.year}`}
          </Typography>

          <Typography variant="body2" color="white">
            Time (UTC): {`${date.hour}:${date.minute}`}
          </Typography>
        </CardContent>
      </CardActionArea>

      {launch.links.youtube_id ? (
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(youtubeUrl, "_blank").focus()}>
            Youtube
          </Button>
        </CardActions>
      ) : (
        <></>
      )}
    </Card>
  )
}
