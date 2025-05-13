import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task as TaskModel } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from 'generated/prisma';
import { UpdateTaskInput } from './dto/updateTask.input';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  // @Query(() => [Task], { nullable: 'items' })
  // getTasks(): Task[] {
  //   return this.taskService.getTasks();
  // }
  @Query(() => [TaskModel], {
    nullable: 'items',
    // , name: 'tasks'
  })
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return await this.taskService.createTask(createTaskInput);
  }

  @Mutation(() => TaskModel)
  async updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    return await this.taskService.updateTask(updateTaskInput);
  }
}
