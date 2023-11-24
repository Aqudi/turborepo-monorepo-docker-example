import { Exclude, Expose } from 'class-transformer';
import * as dayjs from 'dayjs';
import { User } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @Exclude() private readonly _id: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _birthday: dayjs.Dayjs;

  constructor(user: User) {
    this._id = user.id;
    this._name = user.name;
    this._birthday = user.birthday;
  }

  @ApiProperty()
  @Expose()
  get id(): number {
    return this._id;
  }

  @ApiProperty()
  @Expose()
  get name(): string {
    return this._name;
  }

  @ApiProperty()
  @Expose()
  get birthday(): string {
    return this._birthday.toISOString();
  }
}
