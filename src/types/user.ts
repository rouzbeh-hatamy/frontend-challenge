export interface IUser {
  id: number;
  name: string;
  age: number | null;
  email: string;
  newsletter: "daily" | "weekly" | "monthly";
}
