import {Component, OnInit} from '@angular/core';
import {Paslon} from "../../models/paslon.model";

@Component({
  selector: 'app-pemilu',
  templateUrl: './pemilu.component.html',
  styleUrls: ['./pemilu.component.css']
})
export class PemiluComponent implements OnInit {
  listOfPaslon: Paslon[]

  constructor() {
    this.listOfPaslon = [
      new Paslon(1, 'Amin', 0, 'https://kaltimtoday.co/storage/photos/17/Politik/Paslon%20Capres-Cawapres%20No%20Urut%201.png', 'Perubahan'),
      new Paslon(2, 'Pragib', 0, 'https://akcdn.detik.net.id/visual/2023/10/25/prabowo-dan-gibran-resmi-daftar-capres-cawapres-di-kpu-24_169.jpeg?w=650', 'Makan Siang'),
      new Paslon(3, 'Gafud', 0, 'https://asset.kompas.com/crops/8m5a7LgfeiwWRqdERBq8Opj7F-M=/327x654:5127x3854/750x500/data/photo/2023/10/20/653251c228ad0.jpg', 'Internet Gratis'),
    ]
  }

  sortPaslon(): Paslon[] {
    return this.listOfPaslon.sort((a, b) => b.votes - a.votes)
  }

  addPaslon(
    nomor: HTMLInputElement,
    namaPaslon: HTMLInputElement,
    photo: HTMLInputElement,
    moto: HTMLInputElement,
  ):boolean {
    this.listOfPaslon.push(new Paslon(Number(nomor.value), namaPaslon.value, 0, photo.value, moto.value))
    return false
  }

  ngOnInit(): void {
  }

}
