import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AuditableDataEntity } from 'src/common/entities/data-entities/base/auditable-data-entity';
import { EventSubscriberEntity } from './event-subscriber.data.entity';

@Entity('subscriber')
export class SubscriberEntity extends AuditableDataEntity {
  @Column('varchar', { length: 20, nullable: false })
  name: string;
  @Column('varchar', { length: 100, nullable: true })
  description?: string;
  @OneToMany(
    () => EventSubscriberEntity,
    (eventSubscriberEntity) => eventSubscriberEntity.subscriber,
  )
  eventsSubscriber: EventSubscriberEntity[];
}
