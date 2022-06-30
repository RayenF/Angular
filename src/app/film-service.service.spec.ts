import { TestBed } from '@angular/core/testing';
import { FilmServiceService } from './film-service.service.spec.ts';


describe('FilmServiceService', () => {
  let service: FilmServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
