import { Controller, Get, Req, Query, Param } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {

  animalsBreedMapping = {
    barnyard: ['barnyard', 'barnyard2'],
    bird: ['cocoo', 'bird2'],
    cat: ['persian'],
    dog: ['Golden Retriever', 'Husky'],
    horse: ['horse'],
    rabbit: ['rabbit'],
    'scales-fins-other': ['scales-fins-other'],
    'small-furry': ['small-furry']
  };

  pets = [
    { id: 1,location: 'Seattle, WA', animal: 'barnyard', breed: 'barnyard', name: 'barnyard name'},
    { id: 2,location: 'Seattle, WA', animal: 'bird', breed: 'cocoo', name: 'Bird Name'},
    { id: 3,location: 'Seattle, WA', animal: 'cat', breed: 'persian', name: 'persian cat'},
    { id: 4,location: 'Seattle, WA', animal: 'dog', breed: 'Golden Retriever', name: 'Tayra'},
    { id: 5,location: 'Seattle, WA', animal: 'horse', breed: 'horse', name: 'horse name'},
    { id: 6,location: 'Seattle, WA', animal: 'rabbit', breed: 'rabbit', name: 'rabbit name'},
    { id: 7,location: 'Seattle, WA', animal: 'scales-fins-other', breed: 'scales-fins-other', name: 'scales-fins-other name'},
    { id: 8,location: 'Seattle, WA', animal: 'small-furry', breed: 'small-furry', name: 'small-furry name'}
  ];

  constructor(private readonly appService: AppService) {}

  @Get('/breed')
  getData(@Query('animal') animalQuery: string) {
    console.log(animalQuery);
    return this.animalsBreedMapping[animalQuery];
  }

  @Get('/pet')
  getPets(@Req() req: Request) {
    return this.pets.filter(pet => {
      return pet.location === req.query.location && pet.animal === req.query.animal && pet.breed && req.query.breed;
    });
  }

  @Get('/pet/:id')
  getPet(@Param('id') id) {
    console.log('id', id);
    return this.pets.find(pet => {
      return pet.id === parseInt(id, 10);
    });
  }
}
