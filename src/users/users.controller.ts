import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

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
    findOne(@Param('id') id:string ){
        return this.usersService.findOne(+id)   // used unary sign to covnert string to number as expected by findOne function
    }

    @Post() // /users
    create(@Body() user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'} ){
        return this.usersService.create(user)
    }

    @Patch(':id')   // /users/:id
    update(@Param('id') id:string , @Body() userUpdate : {name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'} ){
        return this.usersService.update(+id , userUpdate)
    }

    @Delete(':id')   // /users/:id
    delete(@Param('id') id:string ){
        return this.usersService.delete(+id)
    }

    
}
