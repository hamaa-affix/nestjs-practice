import { CreateItemDto } from './dto/create-item.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  create(createItemDto: CreateItemDto): Item {
    const item: Item = {
      id: uuid(),
      ...createItemDto,
      status: ItemStatus.ON_SALE,
    };
    this.items.push(item);

    return item;
  }

  findById(id: string): Item {
    const item = this.items.find((item) => item.id === id);

    if (!item) {
      throw new NotFoundException();
    }

    return item;
  }

  updateStatus(id: string): Item {
    const item = this.items.find((item) => item.id === id);
    item.status = ItemStatus.SOLD_OUT;

    return item;
  }

  delete(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
