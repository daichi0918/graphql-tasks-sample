import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/createTask.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from 'generated/prisma';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  tasks: Task[] = [];

  async getTasks(): Promise<Task[]> {
    return await this.prismaService.task.findMany();
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { name, dueDate, description } = createTaskInput;
    return await this.prismaService.task.create({
      data: {
        name,
        dueDate,
        description,
      },
    });
  }

  // createTask(createTaskInput: CreateTaskInput): Task {
  //   const { name, dueDate, description } = createTaskInput;
  //   const newTask = new Task();
  //   newTask.id = this.tasks.length + 1;
  //   newTask.name = name;
  //   newTask.dueDate = dueDate;
  //   newTask.status = 'NOT_STARTED';
  //   newTask.description = description;

  //   this.tasks.push(newTask);

  //   return newTask;
  // }
}
