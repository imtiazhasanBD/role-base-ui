import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  await new Promise<void>((resolve) => setTimeout(resolve, 3000));
  return users;
}
const session = await getServerSession(authOptions);
const token = session?.accessToken;
console.log("ssssss", token);


export async function getProfile() {
  console.log("helloooo");
  
const res = await fetch(`https://api.escuelajs.co/api/v1/auth/profile`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  cache: "no-store",
});
  return res.json();
}

