import { TestBed } from '@angular/core/testing';

import { YoutubeRepositoryService } from './youtube-repository.service';

describe('YoutubeRepositoryService', () => {
  let service: YoutubeRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
