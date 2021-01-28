import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Tags} from "./moke/tags";
import {TagsList} from "./moke/tags-moke";

@Injectable({
  providedIn: 'root'
})
export class LeftTagsService {

  constructor() { }

  getTags(): Observable<Tags[]> {
    return of(TagsList);
  }
}
