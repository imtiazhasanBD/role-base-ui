"use client"
import React, { use } from "react";
import { getUsers } from "../lib/utils";

type User = {
    id: string;
    name: string;
    username: string;
    phone: string;
    city: string;
};

type Profile = {
    id: string;
    name: string;
    password: string;
    email: string;
    role: string;
    avatar: string;
};

// --- Combine all props into a single type ---
type CombinedProps = {
    usersPromise: Promise<User[]>;
    profilePromise: Promise<Profile[]>;
};

// --- Accept a single props object and destructure both properties ---
const UserList = ({ usersPromise, profilePromise }: CombinedProps) => {
    const users: User[] = use(usersPromise)
    const profile: Profile[] = use(profilePromise)
    console.log(profile);
    

    return (
        <div className="text-center">
            {/* The rest of your component */}
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Username: {user.username}</p>
                    <p>Phone: {user.phone}</p>
                    <p>City: {user.city}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;