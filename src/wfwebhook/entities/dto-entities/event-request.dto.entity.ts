import { ApiProperty } from '@nestjs/swagger';

export class EventSubscrberRequestDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  webhook: string;
  @ApiProperty()
  key?: string;
  @ApiProperty()
  subscriber_id: string;
}

export class EventRequestDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  subscribers: EventSubscrberRequestDto[];
}
