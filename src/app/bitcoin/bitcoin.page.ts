import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { Observable } from 'rxjs';
import { Bitcoin } from '../models/bitcoin.model';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.page.html',
  styleUrls: ['./bitcoin.page.scss'],
})
export class BitcoinPage implements OnInit {
  currency = 'GBP';
  bitcoin$: Observable<Bitcoin>;

  constructor(private bitcoinService: BitcoinService) { }

  getBitcoinPrice() {
    this.bitcoin$ = this.bitcoinService.getBitcoinPrice(this.currency);
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
   this.getBitcoinPrice();
  }

}
