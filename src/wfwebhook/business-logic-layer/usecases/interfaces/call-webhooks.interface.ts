import { EventTypes } from 'src/wfwebhook/entities/enums/event-types.enum';

export abstract class ICallWebHooksServices {
  abstract execute(eventType: EventTypes, data: any): void;
}
