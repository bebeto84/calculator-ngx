import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CalculatorService {
  constructor(private httpClient: HttpClient) {}

  getRandom(): Observable<string> {
    const randomNumUrl =
      'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';
    return this.httpClient.get<string>(randomNumUrl);
  }
}
