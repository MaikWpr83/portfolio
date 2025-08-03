import { Injectable } from '@angular/core';
import { SkillIcon } from '../interface/icons.interface';
import { ProjectInterface } from '../interface/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  projects: ProjectInterface[] = [
    {
      name: 'EL Pollo Loco',
      link_github: 'https://github.com/MaikWpr83/el_pollo_loco',
      live_link: 'https://el-pollo-loco.maik-wypior.de/',
      languages: ['JavaScript', 'HTML', 'CSS'],
      image: 'assets/img/el-pollo-loco.png',
      description_en:
        'In this jump-and-run game, which was realized with object-oriented programming, Pepe fights against a group of crazy chickens. Help him find coins and Tabasco salsa to fight against the crazy hen.',
      description_de:
        'In diesem Jump-and-Run-Spiel, das mit objektorientierter Programmierung realisiert wurde, kämpft Pepe gegen eine Gruppe verrückter Hühner. Hilf Ihm Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
    },

    {
      name: 'Join',
      link_github: 'https://github.com/MaikWpr83/Join',
      live_link: 'https://join.maik-wypior.de/',
      languages: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      image: 'assets/img/join.png',
      description_en:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      description_de:
        'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
    },

    {
      name: 'Pokedex',
      link_github: 'https://github.com/MaikWpr83/pokedex',
      live_link: 'https://pokedex.maik-wypior.de/',
      languages: ['JavaScript', 'Rest-Api', 'HTML', 'CSS'],
      image: 'assets/img/pokemon.png',
      description_en:
        'A Pokedex database featuring a vast collection of data on every Pokedex there is.',
      description_de:
        'Eine Pokedex-Datenbank mit einer Fülle an Informationen über jedes Pokedex, das es gibt.',
    },

    {
      name: 'Ring of fire',
      link_github: 'https://github.com/MaikWpr83/Ring-of-fire',
      live_link: 'https://ring-of-fire.maik-wypior.de/',
      languages: ['Angular', 'TypeScript', 'SCSS'],
      image: 'assets/img/ring-of-fire.png',
      description_en: 'A card game between friends with challenges.',
      description_de: 'Ein Kartenspiel unter Freunden mit Herausforderungen.',
    },
  ];

  icons: SkillIcon[] = [
    {
      path: 'assets/img/skill-set/Angular.svg',
      name: 'Angular',
      alt: 'Angular',
    },

    {
      path: 'assets/img/skill-set/TypeScript.svg',
      name: 'TypeScript',
      alt: 'TypeScript',
    },

    {
      path: 'assets/img/skill-set/Firebase.svg',
      name: 'Firebase',
      alt: 'Firebase',
    },

    {
      path: 'assets/img/skill-set/git.svg',
      name: 'Git',
      alt: 'Git',
    },

    {
      path: 'assets/img/skill-set/JavaScript.svg',
      name: 'JavaScript',
      alt: 'JavaScript',
    },

    {
      path: 'assets/img/skill-set/Api.svg',
      name: 'Rest-Api',
      alt: 'Rest-Api',
    },

    {
      path: 'assets/img/skill-set/Frame.svg',
      name: 'Material Design',
      alt: 'Material Design',
    },

    {
      path: 'assets/img/skill-set/scrum.svg',
      name: 'Scrum',
      alt: 'Scrum',
    },

    {
      path: 'assets/img/skill-set/html.svg',
      name: 'HTML',
      alt: 'HTML',
    },

    {
      path: 'assets/img/skill-set/Css.svg',
      name: 'CSS',
      alt: 'CSS',
    },

    {
      path: 'assets/img/skill-set/Growth.svg',
      name: 'Growth mindset',
      alt: 'Growth mindset',
    },
  ];
}
