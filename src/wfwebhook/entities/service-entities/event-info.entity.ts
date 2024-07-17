import { EventInfoActivity } from './event-info-activity.entity';
import { EventInfoInstance } from './event-info-instance.entity';

export class EventInfo {
  timestamp: Date;
  date: EventInfoInstance | EventInfoActivity;
}
