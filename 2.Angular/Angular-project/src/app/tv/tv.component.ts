import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tvMovie = [['Avengers', 2018], ['Black widow', 2021]];
  addedMovies = new Array();
  movieInputText = '';
  movieStorage = ["'Avengers'", "'Avalon'", "'Batman'", "'Ameli'", "'Bamblebee'"]
  movieResultArr = '';

  constructor() { }

  addMovie() {
    this.addedMovies = this.movieResultArr.split(" ");
    this.addedMovies.shift();
  }

  movieResult(){
    for(let i=0; i<this.movieStorage.length; i++){
      let searchRequest = this.movieInputText
      if (this.movieStorage[i].includes(searchRequest) && searchRequest !== ''){
        this.movieResultArr += ' ' + this.movieStorage[i];
      }
    }
  }

  clearSearchResult(){
    this.movieInputText = '';
    this.movieResultArr = '';
  }

  lengthOfInput(word: string){
    return word.length > 10 ? true : false;
  }

  disabledSearch(){
    return this.movieInputText.length > 0 ? true : false;
  }

  ngOnInit(): void {
  }

}
