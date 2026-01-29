import { useEffect, useState } from "react";
import type { IUser } from "../../core/interfaces/user.interface";

export default function useUsers() {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        try {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(response => setUsers(response))
        } catch (error) {
            console.error('Ocurrio un error al obtener los usuarios', error);
            throw new Error
        }

    }, []);

    return {
        users
    }
}