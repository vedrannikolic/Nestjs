/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(dto: AuthDto) {
    // generate the hash of the password

    // save the user in the database

    // return the user
    return { msg: 'I am signup' };
  }

  signin() {
    return { msg: 'I am signin in' };
  }
}
