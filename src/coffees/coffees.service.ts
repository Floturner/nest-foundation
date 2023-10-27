import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Coffee 1',
      brand: 'Brand 1',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Coffee 2',
      brand: 'Brand 2',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 3,
      name: 'Coffee 3',
      brand: 'Brand 3',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((item) => item.id === id);
    if (coffee == null) {
      throw new NotFoundException(`Coffee #${id} not found.`);
    }

    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const newCoffee: Coffee = {
      id: this.coffees.length + 1,
      ...createCoffeeDto,
    };
    this.coffees.push(newCoffee);
    return newCoffee;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    const updatedCoffee = {
      ...existingCoffee,
      ...updateCoffeeDto,
    };

    this.coffees = this.coffees.map((item) =>
      item.id === existingCoffee.id ? updatedCoffee : item
    );

    return updatedCoffee;
  }

  remove(id: number) {
    const existingCoffee = this.findOne(id);
    this.coffees = this.coffees.filter((item) => item.id !== existingCoffee.id);
  }
}
