import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.email, signInDto.password)
    }

    @Get('profile')
    @UseGuards(AuthGuard)
    getProfile(@Request() req){
        return req.user;
    }

    @Public()
    @Post('signup')
    async signUp(@Body() signUpDto: Record<string, any>) {
        const { username, email, password } = signUpDto;
        return this.authService.signUp(username, email, password);
    }
}
