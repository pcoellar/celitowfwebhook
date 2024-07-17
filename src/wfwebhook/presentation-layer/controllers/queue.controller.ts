import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ICallWebHooksServices } from 'src/wfwebhook/business-logic-layer/usecases/interfaces/call-webhooks.interface';
import { EventTypes } from 'src/wfwebhook/entities/enums/event-types.enum';
import { EventInfo } from 'src/wfwebhook/entities/service-entities/event-info.entity';

@Controller('queue')
@ApiTags('Queue')
@ApiResponse({ status: 500, description: 'Internal error' })
export class QueueController {
  constructor(private readonly callWebHooksServices: ICallWebHooksServices) {}

  @EventPattern(EventTypes.OnInstanceCreated)
  async onInstanceCreated(data: EventInfo) {
    this.callWebHooksServices.execute(EventTypes.OnInstanceCreated, data);
  }

  @EventPattern(EventTypes.OnInstanceUpdated)
  async onInstanceUpdated(data: EventInfo) {
    this.callWebHooksServices.execute(EventTypes.OnInstanceUpdated, data);
  }

  @EventPattern(EventTypes.OnActivityCreated)
  async onActivityCreated(data: EventInfo) {
    this.callWebHooksServices.execute(EventTypes.OnActivityCreated, data);
  }

  @EventPattern(EventTypes.OnActivityUpdated)
  async onActivityUpdated(data: EventInfo) {
    this.callWebHooksServices.execute(EventTypes.OnActivityUpdated, data);
  }
}
