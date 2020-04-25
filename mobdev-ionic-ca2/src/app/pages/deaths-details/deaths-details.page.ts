import { FavouriteService } from '../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-deaths-details',
  templateUrl: './deaths-details.page.html',
  styleUrls: ['./deaths-details.page.scss'],
})
export class DeathsDetailsPage implements OnInit {

  death: any;
  deathCount = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

  ngOnInit() {

    this.deathCount = this.activatedRoute.snapshot.paramMap.get('count');

    this.api.getDeath(this.deathCount).subscribe(res => {
      this.death = res[0];
    });

  }

}
