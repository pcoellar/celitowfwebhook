import { Column, Entity, ManyToOne } from 'typeorm';
import { AuditableDataEntity } from 'src/common/entities/data-entities/base/auditable-data-entity';
import { EventEntity } from './event.data.entity';
import { SubscriberEntity } from './subscriber.data.entity';

@Entity('event_subscriber')
export class EventSubscriberEntity extends AuditableDataEntity {
  @ManyToOne(
    () => EventEntity,
    (eventEntity) => eventEntity.subscribers,
  )
  event: EventEntity;
  @ManyToOne(
    () => SubscriberEntity,
    (subscriberEntity) => subscriberEntity.events,
  )
  subscriber: SubscriberEntity;
  @Column('varchar', { length: 100, nullable: false })
  webhook: string;
  @Column('varchar', { length: 100, nullable: true })
  key?: string;
}