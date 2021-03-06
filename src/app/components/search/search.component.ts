import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public term: string;
  public term2: string;
  public term3: string;
  public searchRes = [];
  public pathHome = false;

  constructor(
    private _movieService: MoviesService,
    private router: Router,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params => {
        console.log(params);
        if (params['term']) {
          this.onSearch(params['term']);
        }
      });
    }

  doSearch() {
    this.router.navigate(['search', { term: this.term }]);
  }

  testinho() {
    this.router.navigate([{ term: this.term + this.term2 }]);
  }

  onSearch(term: string) {
    this._movieService.searchTest(this.term, this.term2, this.term3).subscribe((res: any) => {
      this.searchRes = res.results;
      console.log(this.searchRes);
      this.pathHome = true;
    });
  }

  ngOnInit() { }

}
