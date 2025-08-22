import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'ADMIN',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            role: 'ENGINEER',
        },
        {
            id: 3,
            name: 'Ali Khan',
            email: 'ali.khan@example.com',
            role: 'INTERN',
        },
        {
            id: 4,
            name: 'Maria Garcia',
            email: 'maria.garcia@example.com',
            role: 'ENGINEER',
        },
        {
            id: 5,
            name: 'David Johnson',
            email: 'david.johnson@example.com',
            role: 'ADMIN',
        },
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }

        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)
        return user
    }


    create(user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        // Step 1: Make a copy of the current users array and sort it by id in descending order
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

        // Step 2: Create a new user object
        const newUser = {
            // Assign an id which is 1 greater than the highest existing user id
            id: usersByHighestId[0].id + 1,
            // Spread the provided user details (name, email, role)
            ...user
        };

        // Step 3: Push the new user into the users array (saving it in memory)
        this.users.push(newUser);

        // Step 4: Return the newly created user
        return newUser;
    }

    update(id: number , updatedUser: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...updatedUser}
            }
            return user;
        })

        return this.findOne(id)
    }

    delete(id: number){
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }



}
