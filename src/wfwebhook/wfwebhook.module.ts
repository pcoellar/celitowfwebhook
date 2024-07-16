import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './entities/data-entities/event.data.entity';
import { SubscriberEntity } from './entities/data-entities/subscriber.data.entity';
import { EventSubscriberEntity } from './entities/data-entities/event-subscriber.data.entity';
import { CommonModule } from 'src/common/common.module';
import { ConfigService } from '@nestjs/config';
import { IApiService } from 'src/common/business-logic-layer/services/api/interfaces/api.interface';
import { ApiService } from 'src/common/business-logic-layer/services/api/api.service';

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
        ConfigService,
    ],
    controllers: [
    ],
    exports: [],
})
export class WfwebhookModule {}
