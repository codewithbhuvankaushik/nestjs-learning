import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UsersService {
    constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService) {}

    users: {id: number, name: string, email: string, age: number, gender: string, isMarried: boolean, password: string}[] = [
        {id: 1, name: "john", email: "john@gmail.com", age: 28, gender: "male", isMarried: true, password: "test123"},
        {id: 2, name: "mark", email: "mark@gmail.com", age: 32, gender: "male", isMarried: false, password: "test234"}
    ]

    getAllUsers() {
        if (this.authService.isAuthenticated) {
            return this.users;
        }

        return [];
    }

    getUserById(id: number) {
        return this.users.find(user => user.id == id);
    }

    createUser(user: {id: number, name: string, email: string, age: number, gender: string, isMarried: boolean, password: string}) {
        this.users.push(user);
    }
}