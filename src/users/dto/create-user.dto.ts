export class CreateUserDto {
    name: string;
    email: string;
    rile: "INTERN" | "ENGINEER" | "ADMIN";
}