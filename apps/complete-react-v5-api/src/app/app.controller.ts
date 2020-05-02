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
    { location: 'Seattle, WA', animal: 'barnyard', breed: 'barnyard', name: 'barnyard name'},
    { location: 'Seattle, WA', animal: 'bird', breed: 'cocoo', name: 'Bird Name'},
    { location: 'Seattle, WA', animal: 'cat', breed: 'persian', name: 'persian cat'},
    { location: 'Seattle, WA', animal: 'dog', breed: 'Golden Retriever', name: 'Tayra'},
    { location: 'Seattle, WA', animal: 'horse', breed: 'horse', name: 'horse name'},
    { location: 'Seattle, WA', animal: 'rabbit', breed: 'rabbit', name: 'rabbit name'},
    { location: 'Seattle, WA', animal: 'scales-fins-other', breed: 'scales-fins-other', name: 'scales-fins-other name'},
    { location: 'Seattle, WA', animal: 'small-furry', breed: 'small-furry', name: 'small-furry name'}
  ];

  constructor(private readonly appService: AppService) {}

  @Get('/breed')
  getData(@Query('animal') animalQuery: string) {
    console.log(animalQuery);
    return this.animalsBreedMapping[animalQuery];
  }

  @Get('/pet')
  getPet(@Req() req: Request) {
    return this.pets.filter(pet => {
      return pet.location === req.query.location && pet.animal === req.query.animal && pet.breed && req.query.breed;
    });
  }
}
