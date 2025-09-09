import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  imageUrl:string  = 'https://image.tmdb.org/t/p/original'
  transform(value: unknown, ...args: unknown[]): unknown {
    if(value){
      return `${this.imageUrl}${value}`
    }else{
      return  'assets/images/no-image.png'
    }

  }

}
