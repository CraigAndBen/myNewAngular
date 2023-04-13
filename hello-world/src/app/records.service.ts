import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ['Adam Taylor', '1211', 'sample@gmail.com'] 
  info2: string[] = ['Shaun Mendez', '1211', 'sample1@gmail.com'] 
  info3: string[] = ['Mark fisher', '1211', 'sample2@gmail.com'] 

  constructor() { }
}
