import { Box, Grid, Divider } from "@mui/material";

export default function ActionPalette({
  left = [],
  right = [],
  leftProps = [],
  rightProps = [],
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        direction={{ xs: "column-reverse", md: "row" }}
        spacing={2}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Grid
          container
          size={{ xs: 12, md: 6 }}
          spacing={1}
          sx={{
            my: 0.5,
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
          }}
        >
          {left.map((Component, key) => (
            <Grid key={key} size="auto">
              <Component {...leftProps[key]} />
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          size={{ xs: 12, md: 6 }}
          spacing={1}
          sx={{
            my: 0.5,
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
          }}
        >
          {right.map((Component, key) => (
            <Grid key={key}>
              <Component {...rightProps[key]} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Divider sx={{ borderStyle: "dashed", mt: 2, mb: 2 }} />
    </Box>
  );
}
