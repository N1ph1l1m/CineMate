import { Component, inject } from '@angular/core';
import { MainpageService } from '../../data/services/mainpage/mainpage-service';
import { PosterItem } from '../../common-ui/poster-item/poster-item';
import { map } from 'rxjs';

@Component({
  selector: 'app-mainpage',
  imports: [PosterItem],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss',
})
export class Mainpage {
  mainPageService = inject(MainpageService);
  data: any = [];
  bannerImg: any = '';
  popularList: any = [];

  ngOnInit() {
    this.mainPageService.getNowPlaying().subscribe((val) => {
      this.data = val;

      if (this.data?.results) {
        const photos = this.data.results.map((item: any) => item.backdrop_path);
        const image = photos[Math.floor(Math.random() * photos.length)];

        this.mainPageService.getImage(image).subscribe((blob) => {
          this.bannerImg = URL.createObjectURL(blob);
        });
      }
    });

    this.mainPageService
      .getPopularList()
      .pipe(map((val: any) => (val?.results ? val.results : null)))
      .subscribe((firstItem) => {
        this.popularList = firstItem;
        console.log(firstItem);
      });
  }
}
