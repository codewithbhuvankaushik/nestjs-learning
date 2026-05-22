import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    users: {id: number, name: string, email: string, age: number, gender: string, isMarried: boolean}[] = [
        {id: 1, name: "john", email: "john@gmail.com", age: 28, gender: "male", isMarried: true},
        {id: 2, name: "mark", email: "mark@gmail.com", age: 32, gender: "male", isMarried: false}
    ]

    getAllUsers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find(user => user.id == id);
    }

    createUser(user: {id: number, name: string, email: string, age: number, gender: string, isMarried: boolean}) {
        this.users.push(user);
    }
}