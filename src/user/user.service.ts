import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private UserModel: Model<User>) {}

  async create(createUserInput: CreateUserInput) {
    const newUser = new this.UserModel(createUserInput);
    return newUser.save();
  }

  async findAll() {
    return await this.UserModel.find({});
  }

  async findOne(id: string) {
    return await this.UserModel.findById(id).exec();
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return await this.UserModel.findByIdAndUpdate(id, updateUserInput, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.UserModel.findByIdAndDelete(id );
  }
}
