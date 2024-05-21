import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-agent-administratif',
  templateUrl: './add-agent-administratif.component.html',
  styleUrls: ['./add-agent-administratif.component.css'],
})
export class AddAgentAdministratifComponent implements OnInit {
  agentForm!: FormGroup;
  user: any = {};
  constructor() {}

  ngOnInit(): void {}
  addAgent() {}
}
