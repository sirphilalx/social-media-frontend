import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="src/assets/Photo_1656184789880.jpg" />
          <Avatar
            alt="Travis Howard"
            src="src/assets/Photo_1656184777918.jpg"
          />
          <Avatar alt="Cindy Baker" src="src/assets/Photo_1656184775500.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList variant="masonry" cols={3} gap={8}>
          <ImageListItem>
            <img src="src/assets/Photo_1656184780365.jpg" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="src/assets/Photo_1656184791075.jpg" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="src/assets/Photo_1656184777918.jpg" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="src/assets/Photo_1656184783877.jpg" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="src/assets/Photo_1656184791075.jpg" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="src/assets/Photo_1656184781737.jpg" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="src/assets/Photo_1656184791075.jpg" loading="lazy" />
          </ImageListItem>

          <ImageListItem>
            <img src="src/assets/Photo_1656184788018.jpg" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="src/assets/Photo_1656184784680.jpg" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="src/assets/Photo_1656184783877.jpg" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="src/assets/Photo_1656184776814.jpg" loading="lazy" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="src/assets/Photo_1656184777918.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="src/assets/Photo_1656184781737.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="src/assets/Profile Picture.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
