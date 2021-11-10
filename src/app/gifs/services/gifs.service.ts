import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetGiphyResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'u9XMpJbDbobrYaQwDbQYTkFJ1xCWHnhg';
  private _historial: string[] = [];

  public results: Gif[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (this._historial.includes(query)) return;
    this._historial.unshift(query);
    this._historial = this._historial.splice(0, 10);
    this.http.get<GetGiphyResponse>
      (`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data)
        this.results = resp.data;
      });
  }
}
