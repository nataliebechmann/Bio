import { Component } from '@angular/core';
import { IExperienceItem } from './experience-item';
import { IExperienceCollection } from './experience-collection';
import { IPiece } from './piece';

@Component({
    selector: 'media',
    templateUrl: './app/media/media.component.html'
})

export class MediaComponent {

    experienceCollections: IExperienceCollection[] = [
        {
            name: "Upcoming",
            experiences: [
                {
                    year: "2017",
                    name: "RNCM 40 Cellos",
                    performances: [
                        "Strings Festival 2016"
                    ],
                    pieces: [
                        {
                            repertoire: "Tallis, ",
                            pieceName: "Spem in Alium"
                        }
                    ]
                }
            ]
        },
        {
            name: "Upcoming",
            experiences: [
                {
                    year: "2017",
                    name: "RNCM 40 Cellos",
                    performances: [
                        "Strings Festival 2016"
                    ],
                    pieces: [
                        {
                            repertoire: "Tallis, ",
                            pieceName: "Spem in Alium"
                        }
                    ]
                }
            ]
        },
        {
            name: "Chamber Music", 
            experiences: [
                {
                    year: "2016",
                    name: "Arc Piano Trio",
                    performances: [],
                    pieces: [
                        {
                            repertoire: "Beethoven, ",
                            pieceName: "Piano Trio in D major, Op. 70, No.1, 'Ghost'"
                        }
                    ]
                },
                {
                    year: "2016",
                    name: "Trillo Cello Trio",
                    performances: [],
                    pieces: [
                        {
                            repertoire: "Pop and Classical crossovers",
                            pieceName: ""
                        }
                    ]
                },
                {
                    year: "2015-16",
                    name: "Obsidian Piano Trio",
                    performances: ["RNCM Nossek Prize 2016"],
                    pieces: [
                        {
                            repertoire: "Lalo, ",
                            pieceName: "Piano Trio in C minor, Op. 7"
                        }
                    ]
                },
                {
                    year: "2014-15",
                    name: "Avocet String Quartet",
                    performances: [
                        "Professional engagements (weddings)", 
                        "Snape Maltings Concert Hall 2014"
                    ],
                    pieces: [
                        {
                            repertoire: "Schubert, ",
                            pieceName: "Death and the Maiden, D810"
                        }
                    ]
                },
            ]
        }
    ]
 }