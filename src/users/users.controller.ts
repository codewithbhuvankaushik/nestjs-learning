import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller("users")
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @Get()
    getUsers(
        @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
    ) {
        const users = this.userService.getAllUsers();

        return users;
    }

    @Get(":isMarried")
    getFilteredUsers(@Param() param: GetUserParamDto) {
        console.log("param ", param);
        const users = this.userService.getAllUsers();

        return users.filter(user => user.isMarried == param.isMarried);
    }
    

    @Get(":id")
    getUserById(@Param("id", ParseIntPipe) id: number) {
        console.log("id ", id);
        
        return this.userService.getUserById(id);
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        // this.userService.createUser(user);
        console.log("user ", user);

        return "New user created with id " + user.id;
    }

    @Patch()
    updateUser(@Body() user: UpdateUserDto) {
        console.log("user ", user);

        return "User updated successfully";
    }
}