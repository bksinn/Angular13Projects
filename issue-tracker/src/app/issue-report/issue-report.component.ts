import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined;
  suggestions: Issue[] = [];
  @Input() issueEdit: Issue | null = null;
  @Output() formClose = new EventEmitter();
  @Output() formEdit = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private issueService: IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['',],
      priority: ['', Validators.required],
      type: ['', Validators.required]
    });

    if(this.issueEdit !== null) {
      this.issueForm = this.formBuilder.group({
        issueNo: [this.issueEdit.issueNo],
        title: [this.issueEdit.title, Validators.required],
        description: [this.issueEdit.description, Validators.required],
        priority: [this.issueEdit.priority, Validators.required],
        type: [this.issueEdit.type, Validators.required]
      })
    }

    this.issueForm.controls['title'].valueChanges
      .subscribe((title: string) => {
        this.suggestions = this.issueService.getSuggestions(title);
      })
  }

  addIssue() {
    if(this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }
    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

  editIssue(editedIssue: FormGroup) {
    if(this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }

    this.issueService.editIssue(editedIssue?.value);
    this.formEdit.emit();
  }
}
