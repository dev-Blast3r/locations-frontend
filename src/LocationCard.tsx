import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface LocationProps {
  code: string;
  name: string;
  image: string;
  creationDate: string;
}

const LocationCard: React.FC<LocationProps> = ({ code, name, image, creationDate }) => {
  return (
    <Card sx={{ margin: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">Code: {code}</Typography>
        <Typography variant="body2">Created: {creationDate}</Typography>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
