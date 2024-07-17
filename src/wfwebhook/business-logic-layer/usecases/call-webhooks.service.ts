import { Injectable } from '@nestjs/common';
import { IEventRepositoryService } from 'src/wfwebhook/data-access-layer/repositories/interfaces/event-repository.interface';
import { EventEntity } from 'src/wfwebhook/entities/data-entities/event.data.entity';
import { EventTypes } from 'src/wfwebhook/entities/enums/event-types.enum';
import { ICallWebHooksServices } from './interfaces/call-webhooks.interface';

@Injectable()
export class CallWebHooksServices implements ICallWebHooksServices {
  constructor(
    private readonly eventRepositoryService: IEventRepositoryService,
  ) {}
  async execute(eventType: EventTypes, data: any) {
    const events: EventEntity[] =
      await this.eventRepositoryService.findByFilter(
        {
          name: eventType,
        },
        ['subscribers'],
      );
    events.forEach((event) => {
      if (event.subscribers) {
        event.subscribers.forEach((subscriber) => {
          console.log(
            `\n\nEvent: ${eventType}\nWebhook called: ${subscriber.webhook} \nData: ${JSON.stringify(data)}`,
          );
        });
      }
    });
  }
}
