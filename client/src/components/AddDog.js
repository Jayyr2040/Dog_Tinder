import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  form: {
    marginTop: 20,
  },
  field: {
    marginTop: 10,
  },
});

export default function AddDog(props) {
  const classes = useStyles();
  const [dogData, setDogData] = useState({
    name: "",
    image: "",
    breed: "",
    sex: "",
    yob: 0,
    description: "",
    owner: props.userId,
    // owner: "demo-owner-id",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      console.log(JSON.stringify(dogData));
      const createDog = async () => {
        const res = await fetch("http://localhost:3003/dogs/", {
          method: "POST",
          body: JSON.stringify(dogData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data);
      };
      createDog();
    }
  };

  return (
    <Container>
      <h2>Add your dog</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setDogData({ ...dogData, name: e.target.value })}
          label="Name of Doggo"
          variant="outlined"
          error={false}
          fullWidth
          className={classes.field}
        />
        <br />
        <TextField
          onChange={(e) => setDogData({ ...dogData, image: e.target.value })}
          label="Image"
          className={classes.field}
          variant="outlined"
          error={false}
          fullWidth
        />
        <TextField
          onChange={(e) => setDogData({ ...dogData, breed: e.target.value })}
          label="Breed"
          variant="outlined"
          error={false}
          className={classes.field}
          fullWidth
        />
        <TextField
          onChange={(e) => setDogData({ ...dogData, sex: e.target.value })}
          label="Sex"
          variant="outlined"
          error={false}
          className={classes.field}
          fullWidth
        />
        <TextField
          onChange={(e) => setDogData({ ...dogData, yob: e.target.value })}
          label="Year of Birth"
          variant="outlined"
          error={false}
          className={classes.field}
          type="number"
          fullWidth
        />
        <TextField
          onChange={(e) => setDogData({ ...dogData, yob: e.target.value })}
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          className={classes.field}
          error={false}
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          size="large"
          className={classes.field}
        >
          Add dog
        </Button>
      </form>
    </Container>
  );
}
