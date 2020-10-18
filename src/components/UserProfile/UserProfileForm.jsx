import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Switch from "@material-ui/core/Switch";
import withForm from "../withForm";

const regex = {
  phone: RegExp("09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}"),
  email: RegExp("[^@]+@[^.]+..+"),
  birthDate: RegExp(
    "^[0-9]{4}([- /.])(((0[13578]|(10|12))\\1(0[1-9]|[1-2][0-9]|3[0-1]))|(02\\1(0[1-9]|[1-2][0-9]))|((0[469]|11)\\1(0[1-9]|[1-2][0-9]|30)))$"
  )
  // birthDate: RegExp("\\d{4}/\\d{2}/\\d{2}")
};

function validate(prop, val, data) {
  let errorMessage = "";
  const mandatories = ["firstName", "lastName", "phone", "email"];

  if (!val && mandatories.indexOf(prop) > -1) {
    errorMessage = "Required";
  } else if (!!val && !!regex[prop] && !regex[prop].test(val)) {
    errorMessage = "Invalid";
  }

  return errorMessage;
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(2)
    },
    toolbar: { display: "flex", "& > :first-child": { flexGrow: 1 } },
    hidden: { display: "none" }
  })
);

export function UserProfileForm({ onSubmit, fields, hasError }) {
  const classes = useStyles();

  const getProps = name => {
    const field = fields[name] || {};
    return {
      name,
      value: field.value,
      onChange: field.onChange,
      error: field.isDirty && Boolean(field.error),
      helperText: field.isDirty ? field.error : ""
    };
  };

  const getSwitchProps = name => {
    const field = fields[name] || {};
    return {
      name,
      checked: field.value,
      onChange: field.onChange,
      error: field.error
    };
  };

  const getRadioProps = name => {
    const field = fields[name] || {};
    return {
      name,
      value: field.value,
      onChange: field.onChange,
      error: field.error
    };
  };

  return (
    <Paper className={classes.root} elevation={3}>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.toolbar}>
              <div>
                <label htmlFor="upload-photo">
                  <input
                    accept="image/*"
                    className={classes.hidden}
                    id="upload-photo"
                    type="file"
                    name="avatar"
                    onChange={fields["avatar"].onChange}
                  />
                  <Button
                    color="secondary"
                    variant="contained"
                    component="span"
                  >
                    Change Picture
                  </Button>
                </label>
              </div>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={hasError}
              >
                Submit
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="First Name"
              {...getProps("firstName")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Last Name"
              {...getProps("lastName")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Phone"
              {...getProps("phone")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email Address"
              {...getProps("email")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Birth Date"
              {...getProps("birthDate")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Title"
              select
              {...getProps("title")}
            >
              <MenuItem value="Writor">Writor</MenuItem>
              <MenuItem value="Editor">Editor</MenuItem>
              <MenuItem value="Publisher">Publisher</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Display Email</FormLabel>
              <Switch {...getSwitchProps("isEmailVisible")} />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup row {...getRadioProps("gender")}>
                <FormControlLabel
                  value="Male"
                  control={<Radio color="primary" />}
                  label="Male"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Femail"
                  control={<Radio color="primary" />}
                  label="Femail"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio color="primary" />}
                  label="Other"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Address"
              multiline
              {...getProps("address")}
            />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default withForm({ validate })(UserProfileForm);
