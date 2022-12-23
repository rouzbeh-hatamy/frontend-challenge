import { IUser } from "../types/user";

export function createUser(user: IUser) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user, token: "test.token" });
    }, 1000);
  });
}
