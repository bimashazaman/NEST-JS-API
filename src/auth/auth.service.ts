import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return 'This is where we signin';
  }
  signup() {
    return 'This is where we signup';
  }
}
