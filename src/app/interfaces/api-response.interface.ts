export interface IApiResponseResults{
    adult:string,
    genre_ids:number[],
    backdrop_path:string,
    id:number,
    original_language:string,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path:string
    release_date:string,
    title:string,
    video:boolean,
    vote_average:number,
    vote_count:number
}

export interface IApiResponse {
  dates:number[],
  results: IApiResponseResults[];
  page:number,
  total_pages:number,
  total_results:number
}
