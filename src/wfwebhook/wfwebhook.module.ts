import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './entities/data-entities/event.data.entity';
import { SubscriberEntity } from './entities/data-entities/subscriber.data.entity';
import { EventSubscriberEntity } from './entities/data-entities/event-subscriber.data.entity';
import { CommonModule } from 'src/common/common.module';
import { ConfigService } from '@nestjs/config';
import { IApiService } from 'src/common/business-logic-layer/services/api/interfaces/api.interface';
import { ApiService } from 'src/common/business-logic-layer/services/api/api.service';
import { IEventRepositoryService } from './data-access-layer/repositories/interfaces/event-repository.interface';
import { EventRepositoryService } from './data-access-layer/repositories/event-repository.service';
import { GetEventSubscribersService } from './business-logic-layer/usecases/get-event-subscribers.service';
import { IGetEventSubscribersService } from './business-logic-layer/usecases/interfaces/get-event-subscribers.interface';
import { ICallWebHooksServices } from './business-logic-layer/usecases/interfaces/call-webhooks.interface';
import { CallWebHooksServices } from './business-logic-layer/usecases/call-webhooks.service';
import { QueueController } from './presentation-layer/controllers/queue.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
          EventEntity,
          SubscriberEntity,
          EventSubscriberEntity,
        ]),
        CommonModule,
    ],
    providers: [
        {
            provide: IApiService,
            useClass: ApiService,
        },
        {
            provide: IEventRepositoryService,
            useClass: EventRepositoryService,
        },
        {
            provide: IGetEventSubscribersService,
            useClass: GetEventSubscribersService,
        },
        {
            provide: ICallWebHooksServices,
            useClass: CallWebHooksServices,
        },
        ConfigService,
    ],
    controllers: [
        QueueController,
    ],
    exports: [],
})
export class WfwebhookModule {}
