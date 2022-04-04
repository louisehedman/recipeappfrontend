import { TestBed } from '@angular/core/testing';

import { RecipeListService } from './recipe-list.service';

describe('RecipeList.ServiceService', () => {
  let service: RecipeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
