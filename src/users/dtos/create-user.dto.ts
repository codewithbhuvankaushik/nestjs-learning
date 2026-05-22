import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name!: string;

    @IsNumber()
    id!: number;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsNumber({}, {message: "Age should be a number"})
    age!: number;

    @IsEmail()
    email!: string;

    @IsBoolean()
    isMarried!: boolean;
}