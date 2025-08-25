import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

enum UserRole {
    INTERN = "INTERN",
    ENGINEER = "ENGINEER",
    ADMIN = "ADMIN"
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(UserRole, { message: "Valid Role Required" })
    role: "INTERN" | "ENGINEER" | "ADMIN";
}