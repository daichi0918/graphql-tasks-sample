import { Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.model';

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
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  // @Mutation(() => Task)
  // createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput): Task {
  //   return this.taskService.createTask(createTaskInput);
  // }
}
