import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { WfwebhookModule } from './wfwebhook/wfwebhook.module';

@Module({
  imports: [CommonModule, WfwebhookModule],
})
export class AppModule {}
