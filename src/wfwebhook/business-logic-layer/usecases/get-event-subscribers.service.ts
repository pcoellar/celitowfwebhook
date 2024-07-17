import { Injectable } from '@nestjs/common';
import { IGetEventSubscribersService } from './interfaces/get-event-subscribers.interface';
import { IEventRepositoryService } from 'src/wfwebhook/data-access-layer/repositories/interfaces/event-repository.interface';
import { EventResponseDto } from 'src/wfwebhook/entities/dto-entities/event-response.dto.entity';
import { EventEntity } from 'src/wfwebhook/entities/data-entities/event.data.entity';
import { EventResponseParser } from 'src/wfwebhook/entities/dto-entities/parsers/event-response.dto.parse';

@Injectable()
export class GetEventSubscribersService implements IGetEventSubscribersService {
  constructor(
    private readonly eventRepositoryService: IEventRepositoryService,
  ) {}
  async execute(id: string): Promise<EventResponseDto> {
    const event: EventEntity = await this.eventRepositoryService.find(id, [
      'subscribers',
    ]);
    const eventResponseParser = new EventResponseParser();
    const result: EventResponseDto =
      eventResponseParser.ParseToEventResponseDto(event);
    return result;
  }
}
