import { Component, OnInit } from '@angular/core';
import { ProgramService } from './program.service';
import { Program } from './program';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  programs: Program[];

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.getPrograms();
  }

  getPrograms(): void {
    this.programService
        .getPrograms()
        .then(programs => this.programs = programs);
  }
}
