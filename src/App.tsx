import { Button, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserTable from "./components/UserTable";
import { IUser } from "./types/user";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState<IUser[]>([
    {
      id: 1,
      name: "rouzbeh",
      age: 27,
      email: "roozbeh.hatamy@gmail.com",
      newsletter: "monthly",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);

  const handleAddUser = (user: IUser) => {
    setUsers((prev) => [...prev, user]);
  };
  return (
    <Container maxWidth="lg">
      <Grid container p={10}>
        <Grid item xs={12} display="flex" justifyContent="flex-end" py={2}>
          <Button variant="contained" color="primary">
            <AddUser
              handleClose={handleCloseModal}
              open={openModal}
              addUser={handleAddUser}
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <UserTable users={users} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
