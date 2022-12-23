export interface IUser {
  id: number;
  name: string;
  age: number;
  email: string;
  newsletter: "daily" | "weekly" | "monthly";
}