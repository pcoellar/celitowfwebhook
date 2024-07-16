import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { WfwebhookModule } from './wfwebhook/wfwebhook.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './wfwebhook/entities/data-entities/event.data.entity';
import { SubscriberEntity } from './wfwebhook/entities/data-entities/subscriber.data.entity';
import { EventSubscriberEntity } from './wfwebhook/entities/data-entities/event-subscriber.data.entity';

@Module({
  imports: [
    WfwebhookModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'celitotestdb.postgres.database.azure.com',
        port: 5432,
        username: 'postgres',
        password: 'celitotestdb.2024',
        database: 'celitowfwebhook',
        ssl: true,
        entities: [
          EventEntity,
          SubscriberEntity,
          EventSubscriberEntity,
        ],
        synchronize: true,
      }),
    }),
    CommonModule,
  ],
})
export class AppModule {}
