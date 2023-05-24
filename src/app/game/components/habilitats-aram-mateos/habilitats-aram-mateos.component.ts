import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-habilitats-aram-mateos',
  templateUrl: './habilitats-aram-mateos.component.html',
  styleUrls: ['./habilitats-aram-mateos.component.css']
})
export class HabilitatsAramMateosComponent implements OnInit {

  constructor(private https: HttpClient) { }

  ngOnInit(): void {
  }
  @Input() nom: string | undefined;
  @Input() habilitat: Array<any> = [];
  @Input() descripcio: Array<any> = [];
}
