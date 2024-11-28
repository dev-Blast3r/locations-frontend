import React, { useEffect, useState } from "react";
import api from "./api"; // Tu instancia de axios
import LocationCard from "./LocationCard"; // Componente para renderizar una tarjeta
import { Grid, Container, Typography } from "@mui/material";

interface Location {
  code: string;
  name: string;
  image: string;
  creationDate: string;
}

const App = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await api.get("/locations"); // Llamada a la API
        setLocations(response.data); // Almacena los datos
      } catch (err) {
        console.error("Error fetching locations:", err);
        setError("Error fetching locations");
      }
    };

    fetchLocations();
  }, []);

  if (error) return <div>{error}</div>; // Muestra el error si ocurre

  return (
    <Container>
        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: "center", margin: "20px 0" }}>
        Nuestras Sedes
        </Typography>
        <Grid container spacing={3}>
        {locations.map((location) => (
            <Grid item xs={12} sm={6} md={4} key={location.code}>
            <LocationCard
                code={location.code}
                name={location.name}
                image={location.image}
                creationDate={location.creationDate}
            />
            </Grid>
        ))}
        </Grid>
    </Container>
  );
};

export default App;
