import { AuditableDataEntity } from 'src/common/entities/data-entities/base/auditable-data-entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { EventSubscriberEntity } from './event-subscriber.data.entity';

@Entity('event')
export class EventEntity extends AuditableDataEntity {
  @Column('varchar', { length: 20, nullable: false, unique: true })
  name: string;
  @OneToMany(
    () => EventSubscriberEntity,
    (eventSubscriberEntity) => eventSubscriberEntity.event,
  )
  eventSubscribers: EventSubscriberEntity[];
}