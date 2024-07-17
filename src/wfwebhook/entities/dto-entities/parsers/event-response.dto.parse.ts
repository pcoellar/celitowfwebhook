import { EventEntity } from '../../data-entities/event.data.entity';
import {
  EventResponseDto,
  EventSubscriberResponseDto,
} from '../event-response.dto.entity';

export class EventResponseParser {
  ParseToEventResponseDto(event: EventEntity): EventResponseDto {
    const subscribers: EventSubscriberResponseDto[] = [];
    if (event.subscribers) {
      for (let i = 0; i < event.subscribers.length; i++) {
        const subscriber: EventSubscriberResponseDto = {
          id: event.subscribers[i].id,
          webhook: event.subscribers[i].webhook,
          key: event.subscribers[i].key,
          subscriber_id: event.subscribers[i].subscriber.id,
          createdDate: event.subscribers[i].createdDate,
          lastModified: event.subscribers[i].lastModified,
        };
        subscribers.push(subscriber);
      }
    }

    const result: EventResponseDto = {
      id: event.id,
      name: event.name,
      subscribers: subscribers,
      createdDate: event.createdDate,
      lastModified: event.lastModified,
    };

    return result;
  }
}
