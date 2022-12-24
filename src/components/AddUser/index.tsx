/* eslint-disable no-unused-vars */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { validateEmail } from "../../sdk/api";
import { IUser } from "../../types/user";

interface IAddUser {
  handleClose: () => void;
  addUser: (user: IUser) => void;
  open: boolean;
  newId: number;
}

const steps = ["Personal Information", "Contact Information"];

function AddUser({ handleClose, open, addUser, newId }: IAddUser) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [info, setInfo] = useState<IUser>({
    id: newId,
    name: "",
    email: "",
    age: 0,
    newsletter: "daily",
  });

  const [inputValidator, setInputValidator] = useState({
    name: true,
    age: true,
    email: true,
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInfo((prev) => ({ ...prev, [target.name]: target.value }));
    if (target.value) {
      setInputValidator((prev) => ({ ...prev, [target.name]: true }));
    } else {
      setInputValidator((prev) => ({ ...prev, [target.name]: false }));
    }
  };

  const handleChangeSelect = ({ target }: any) => {
    setInfo((prev) => ({ ...prev, newsletter: target.value }));
  };

  const disabledButton = () => {
    if (activeStep === 0) {
      if (
        inputValidator.name === false ||
        inputValidator.age === false ||
        !info.name ||
        !info.age
      ) {
        return true;
      }
      return false;
    }

    if (!info.email || validateEmail(info.email) === false) {
      return true;
    }
    return false;
  };

  const handleNext = () => {
    if (activeStep === 0) {
      setActiveStep(1);
    } else {
      console.log("submit");
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      handleClose();
    } else {
      setActiveStep(0);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
      <DialogTitle>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </DialogTitle>
      <DialogContent>
        {activeStep === 0 ? (
          <Box p={3} display="flex" justifyContent="space-between">
            <TextField
              value={info.name}
              label="Full Name"
              name="name"
              variant="outlined"
              color={inputValidator.name ? "info" : "error"}
              onChange={handleChange}
            />
            <TextField
              value={info.age}
              label="Age"
              name="age"
              variant="outlined"
              color={inputValidator.age ? "info" : "error"}
              type="number"
              onChange={handleChange}
            />
          </Box>
        ) : (
          <Box p={3} display="flex" justifyContent="space-between">
            <TextField
              value={info.email}
              label="Email"
              name="email"
              variant="outlined"
              color={inputValidator.name ? "info" : "error"}
              onChange={handleChange}
            />
            <FormControl sx={{ width: "230px" }}>
              <InputLabel id="select">Newsletter</InputLabel>
              <Select
                labelId="select"
                value={info.newsletter}
                label="Newsletter"
                onChange={handleChangeSelect}
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="monthly">Weekly</MenuItem>
                <MenuItem value="weekly">Monthly</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleBack}>
          {activeStep === 0 ? "Close" : "back"}
        </Button>
        <Button
          variant="contained"
          disabled={disabledButton()}
          onClick={handleNext}
        >
          {activeStep === 0 ? "Next" : "submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddUser;
