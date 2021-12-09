import { TestBed } from '@angular/core/testing';

import { PlaylistSharedService } from "./playlist-shared.service";

describe('PlaylistSharedService', () => {
  let service: PlaylistSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
