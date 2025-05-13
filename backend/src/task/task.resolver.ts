import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  // @Query(() => [Task], { nullable: 'items' })
  // getTasks(): Task[] {
  //   return this.taskService.getTasks();
  // }
  @Query(() => [Task], {
    nullable: 'items',
    // , name: 'tasks'
  })
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Mutation(() => Task)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return await this.taskService.createTask(createTaskInput);
  }
}
