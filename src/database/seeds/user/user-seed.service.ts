import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../security/entities/user.entity';
import { Repository } from 'typeorm';
import { Status } from '../../../common/enums/status.enum';
import { TextService } from '../../../utils/text.service';
import { RoleEnum } from '../../../security/enums/roles.enum';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async run() {
    const contUsers = await this.repository.count();
    if (contUsers === 0) {
      await this.repository.save(
        this.repository.create({
          username: 'admin@example.com',
          password: 'secret',
          email: 'admin@example.com',
          status: Status.CREATE,
          createdAt: new Date(),
          createdUser: '1',
          role: {
            id: TextService.textToUuid(RoleEnum.ADMIN),
            name: RoleEnum.ADMIN,
          },
        }),
      );
    }
  }
}
