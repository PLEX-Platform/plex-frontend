import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatchMakingResult } from '../shared/matchmaking-result.model';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-matchmaking-group',
  templateUrl: './matchmaking-group.component.html',
  styleUrls: ['./matchmaking-group.component.scss']
})
export class MatchmakingGroupComponent implements OnInit {

  // todo = [
  //   'Alex',
  //   'Lexa',
  //   'Axel',
  //   'Elax',

  // ];

  // done = [
  //   'Xael',
  //   'Xeal',
  //   'Exla',
  //   'Leax',
  //   'Xale',
  // ];
  matchmakingResult: Record<string, string[]> = {
    "ACI Rental System": [
      "Bednarek, Michael M.D.",
      "Brouwer, Daan D.H.W.",
      "Dongen, Cyrion C.M.N. van",
      "Pelsma, Bart B.A",
      "Pluimert, Xander X",
      "Volkers, Sam S.O",
    ],
    "PLEX Tool": [
      "Boers, Sam S",
      "Sweere, Steijn S",
      "Khoun, Donovan V.D",
      "Vroegop, Michael M",
      "Kruize, Nick N",
      "Podrono, Wensley W.S",
    ],
    "Validation of MO (CM.com)": [
      "Bergrok, Ashwin A.G.A",
      "Enden, Luc L. van den",
      "Hendriks, Amy S.",
      "Janssens, Martijn M.A.R.G",
      "Moor, Tim T.E.A. de",
      "Trang, Giang V.H.G",
    ],
    "Digitaal Uitzendbureau (Easyflex)": [
      "Aboslo, Omar O",
      "Marcinkiewicz, Marcin M.",
      "Adamowski, Kacper K",
      "Smulders, Floris F.F.E.J",
      "Almasri, Ammar A",
      "Isselt, Pepijn P.C.T. van",
    ],
    "Fontys iPost": [
      "Bavel, Stan S.W.J. van",
      "Doomen, Jens J.J.W.",
      "Kuiper, Billy B.B.",
      "Pertijs, Sam S.A.",
      "Pieterman, Axel A.X.E.L. van de",
      "Withagen, Sven Withagen S.J.T.M.",
    ],
    "Onboard Gamification (TaxModel)": [
      "Bots, Jitske J.I.",
      "Brouwer, Yarik Y.N.I.",
      "Dussen, Max M.H.J. van der",
      "Goorden, Raoul R.P.A.",
      "Hoogsteder, Damian D.",
      "Liebregts, Ron T.A.J.",
    ],
    "Medicatiebewaking": [
      "Bouman, Daniël D.N.",
      "Dijke, Marwin H.M.J. van",
      "Joosen, Sjoerd S.H.J.P.",
      "Riel, Jasper J. van",
      "Rooij, Jelmer J.W.W. de",
      "Smits, Yoeri Y.A.J.",
    ],
    "Mobiele Huisarts (Pharma) ": [
      "Eekelen, Davey D.B.A.M. van",
      "Marrewijk, Tom T.S. van",
      "Osch, Wietze W. van",
      "Schalk, Robbert R.A.P.M.",
      "Stam, Roel R.",
      "Wisse, Pieter P.",
    ],
    "Security Awareness Trainer (NxtApp/Motiv) ": [
      "Barsatie, Sheniva S.",
      "Kalyon, Vildan V.",
      "Rosheuvel, Yannick Y.W.E.",
      "Spaandonk, Dieter D.J.F. van",
      "Waard, Isabeau T.I. de",
      "Weber, Martijn M.",
    ],
    "Leftover students": [
      "Lexa",
      "Alex",
      "Xela",
      "Axel",
    ]
  };

  originalOrder = (a: KeyValue<string,string[]>, b: KeyValue<string,string[]>): number => {
    return 0;
  }

  matchmakingResultKeyValuePairs = Object.entries(this.matchmakingResult);

  constructor() { }

  ngOnInit(): void {
    for (const key in this.matchmakingResult) {
      key
    }

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
