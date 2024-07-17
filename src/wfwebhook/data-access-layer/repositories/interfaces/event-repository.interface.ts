import { IDataReaderService } from 'src/common/data-access-layer/repositories/interfaces/data-reader.interface';
import { EventEntity } from 'src/wfwebhook/entities/data-entities/event.data.entity';

export abstract class IEventRepositoryService
  implements IDataReaderService<EventEntity>
{
  abstract findAll(relations?: string[]): Promise<EventEntity[]>;
  abstract find(id: string, relations?: string[]): Promise<EventEntity>;
  abstract findByFilter(
    filter: any,
    relations?: string[],
  ): Promise<EventEntity[]>;
}
