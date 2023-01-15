import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/security/user.entity';
import { Repository } from 'typeorm';
import { Status } from '../../../common/enums/status.enum';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async run() {
    await this.repository.save(
      this.repository.create({
        username: 'admin@example.com',
        password: 'secret',
        email: 'admin@example.com',
        status: Status.CREATE,
        createdAt: new Date(),
        createdUser: '1',
      }),
    );
  }
}
