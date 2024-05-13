import { InputType, Int, Field } from '@nestjs/graphql';
import { GraphQLUpload, Upload } from 'graphql-upload';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  status: boolean;

  @Field()
  gender: string;

  @Field(() => GraphQLUpload, { nullable: true }) // Nullable profile picture field
  profilePicture?: Upload;
}
