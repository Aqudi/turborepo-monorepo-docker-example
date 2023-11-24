import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User> = []; // 사용자를 저장할 배열 초기화

  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.name = createUserDto.name;
    // user.birthday = createUserDto.birthday;
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users; // 모든 사용자 반환
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    user.name = updateUserDto.name ?? user.name;
    // user.birthday = updateUserDto.birthday ?? user.birthday;
    return user;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    this.users.splice(userIndex, 1);
    return true;
  }
}
