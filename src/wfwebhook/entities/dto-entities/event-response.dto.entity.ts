export class EventSubscriberResponseDto {
  id: string;
  webhook: string;
  key: string;
  subscriber_id: string;
  createdDate?: Date;
  lastModified?: Date;
}

export class EventResponseDto {
  id: string;
  name: string;
  subscribers: EventSubscriberResponseDto[];
  createdDate?: Date;
  lastModified?: Date;
}
