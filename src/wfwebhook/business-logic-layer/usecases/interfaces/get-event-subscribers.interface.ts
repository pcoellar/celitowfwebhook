import { EventResponseDto } from 'src/wfwebhook/entities/dto-entities/event-response.dto.entity';

export abstract class IGetEventSubscribersService {
  abstract execute(id: string): Promise<EventResponseDto>;
}
