import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../../../security/entities/role.entity';
import { Repository } from 'typeorm';
import { TextService } from 'src/utils/text.service';
import { RoleEnum } from 'src/security/enums/roles.enum';

@Injectable()
export class RoleSeedService {
  constructor(
    @InjectRepository(Role)
    private repository: Repository<Role>,
  ) {}

  async run() {
    const contRoles = await this.repository.count();

    if (contRoles === 0) {
      await this.repository.save([
        this.repository.create({
          id: TextService.textToUuid(RoleEnum.ADMIN),
          name: RoleEnum.ADMIN,
        }),
        this.repository.create({
          id: TextService.textToUuid(RoleEnum.USER),
          name: RoleEnum.USER,
        }),
      ]);
    }
  }
}
