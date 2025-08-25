import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    /* Defining routes
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    constructor(private readonly usersService: UsersService) {}

    @Get()  // /users or users?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN' ) {
        return this.usersService.findAll(role)
    }

    @Get(':id')   // /users/:id
    findOne(@Param('id', ParseIntPipe) id:number ){
        return this.usersService.findOne(id)   // used unary sign to covnert string to number as expected by findOne function
    }

    @Post() // /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto ){
        return this.usersService.create(createUserDto)
    }

    @Patch(':id')   // /users/:id
    update(@Param('id', ParseIntPipe) id:number , @Body(ValidationPipe) updateUserDto : UpdateUserDto ){
        return this.usersService.update(id , updateUserDto)
    }

    @Delete(':id')   // /users/:id
    delete(@Param('id', ParseIntPipe) id:number ){
        return this.usersService.delete(id)
    }
    
}
