import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Gallery } from './gallery';
import { GALLERY_MOCK } from '../../data/gallery-mock';

@Injectable()
export class GalleryService {

  constructor() { }

  getGallery(): Observable<Gallery[]> {
    return of<Gallery[]>(GALLERY_MOCK);
  }

}
