import { TestBed } from '@angular/core/testing';

import { AddFriendService } from './add-friend.service';

describe('AddFriendServiceService', () => {
  let service: AddFriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
