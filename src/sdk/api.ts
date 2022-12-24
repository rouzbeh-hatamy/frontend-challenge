import { IUser } from "../types/user";

export function createUser(user: IUser) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user, token: "test.token" });
    }, 1000);
  });
}

export const validateEmail = (email: string = "") => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};
