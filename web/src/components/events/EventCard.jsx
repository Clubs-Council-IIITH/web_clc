import dynamic from "next/dynamic";
import Link from "next/link";

import { Box, Card, CardActionArea, Typography, Stack } from "@mui/material";

import EventPoster from "components/events/EventPoster";
import EventFallbackPoster from "components/events/EventFallbackPoster";

const DateTime = dynamic(() => import("components/DateTime"), { ssr: false });

export default function EventCard({
  _id,
  name,
  datetimeperiod,
  poster,
  clubid,
}) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        width: "80%",
        ml: "10%",
        boxShadow: "0px 4px 8px rgba(7, 7, 7, 0.1)",
      }}
    >
      <CardActionArea component={Link} href={`/events/${_id}`}>
        <Box sx={{ pt: "80%", position: "relative" }}>
          {poster ? (
            <EventPoster name={name} poster={poster} width={600} height={600} />
          ) : (
            <EventFallbackPoster clubid={clubid} width={300} height={400} />
          )}
        </Box>

        <Stack spacing={1} sx={{ p: 3 }}>
          <Typography
            variant="subtitle2"
            fontSize={16}
            noWrap
            color={"text.extra"}
          >
            {name}
          </Typography>
          <Typography variant="caption" noWrap>
            <DateTime dt={datetimeperiod?.[0]} showWeekDay={true} />
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
