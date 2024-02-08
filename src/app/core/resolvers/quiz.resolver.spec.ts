import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { quizResolver } from './quizResolver';

describe('userResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => quizResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
