import { Component, OnInit } from '@angular/core';
import { Gallery } from './gallery';
import { GALLERY_MOCK } from '../../data/gallery-mock';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  gallery: Gallery[];

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.getGallery();
  }

  private getGallery(): void {
    this.galleryService.getGallery().subscribe(gallery => this.gallery = gallery);
  }
}
