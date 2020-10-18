import React from "react";
import Grid from "@material-ui/core/Grid";
import { UserProfileCard, UserProfileForm } from ".";

const initials = {
  avatar: undefined,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  birthDate: "",
  title: "",
  isEmailVisible: true,
  gender: "",
  address: ""
};

export default function UserProfile() {
  const [values, setValues] = React.useState(initials);

  const handleSubmit = data => {
    console.log(data);
    setValues(data);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <UserProfileCard data={values} />
      </Grid>
      <Grid item xs>
        <UserProfileForm initials={initials} onSubmit={handleSubmit} />
      </Grid>
    </Grid>
  );
}
