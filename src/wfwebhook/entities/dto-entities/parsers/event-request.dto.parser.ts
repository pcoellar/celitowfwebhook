import { EventSubscriberEntity } from '../../data-entities/event-subscriber.data.entity';
import { EventEntity } from '../../data-entities/event.data.entity';
import { EventRequestDto } from '../event-request.dto.entity';

export class EventRequestParser {
  ParseToEventEntity(eventRequest: EventRequestDto): EventEntity {
    const event: EventEntity = {
      id: eventRequest.id,
      name: eventRequest.name,
      subscribers: null,
    };

    const subscribers: EventSubscriberEntity[] = [];
    if (eventRequest.subscribers) {
      for (let i = 0; i < eventRequest.subscribers.length; i++) {
        const subscriber: EventSubscriberEntity = {
          id: eventRequest.subscribers[i].id,
          webhook: eventRequest.subscribers[i].webhook,
          key: eventRequest.subscribers[i].key,
          event: event,
          subscriber: {
            id: eventRequest.subscribers[i].subscriber_id,
            name: null,
            events: null,
          },
        };
        subscribers.push(subscriber);
      }
    }

    event.subscribers = subscribers;
    return event;
  }
}
