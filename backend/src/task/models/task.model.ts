import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Status } from 'generated/prisma';

@ObjectType()
export class Task {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  status: Status;

  @Field(() => String, {
    nullable: true,
    description: 'タスクの説明',
  })
  description: string | null;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
