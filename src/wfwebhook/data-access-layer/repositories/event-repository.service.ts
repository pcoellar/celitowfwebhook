import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IEventRepositoryService } from './interfaces/event-repository.interface';
import { EventEntity } from 'src/wfwebhook/entities/data-entities/event.data.entity';

@Injectable()
export class EventRepositoryService implements IEventRepositoryService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly entityRepository: Repository<EventEntity>,
  ) {}

  async findAll(relations?: string[]): Promise<EventEntity[]> {
    const entities: EventEntity[] = await this.entityRepository.find({
      relations: relations ?? [],
    });
    return entities;
  }

  async findByFilter(
    filter: any,
    relations?: string[],
  ): Promise<EventEntity[]> {
    try {
      return await this.entityRepository.find({
        where: filter,
        relations: relations ?? [],
      });
    } catch {
      throw new NotFoundException();
    }
  }

  async find(id: string, relations?: string[]): Promise<EventEntity> {
    try {
      return await this.entityRepository.findOne({
        where: { id },
        relations: relations ?? [],
      });
    } catch {
      throw new NotFoundException();
    }
  }
}
