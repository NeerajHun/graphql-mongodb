import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class User {
  @Field()
  id: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  age: number;

  @Field()
  @Prop()
  status: boolean;

  @Field()
  @Prop()
  gender: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
