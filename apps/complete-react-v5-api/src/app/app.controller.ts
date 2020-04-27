import { Controller, Get, Req, Query } from '@nestjs/common';

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

  constructor(private readonly appService: AppService) {}

  @Get('/breed')
  getData(@Query('animal') animalQuery: string) {
    console.log(animalQuery);
    return this.animalsBreedMapping[animalQuery];
  }
}
