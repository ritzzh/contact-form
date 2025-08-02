import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommonService } from "../../../../core/services/commonService";
import { map, Observable, startWith } from "rxjs";
import { ContactService } from "../../services/contactService";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "../../../../shared/confirm-dialog/confirm-dialog";
import { Router } from "@angular/router";

@Component({
  standalone: false,
  selector: "app-contact-form",
  templateUrl: "./contact-form.html",
  styleUrl: "./contact-form.scss",
})
export class ContactForm {
  contactForm!: FormGroup;
  locations: string[] = ["USA", "Canada", "UK", "Australia", "India"];
  filteredLocations!: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private contactService: ContactService,
    private dialog: MatDialog
  ) {}

  redirectToFormDisplay() {
    this.router.navigate(["/contact-us/read-feedbacks"]);
  }

  ngOnInit() {
    this.fetchAllCountries();
    this.contactForm = this.fb.group({
      name: [
        "",
        [Validators.required, Validators.maxLength(30), this.noScriptValidator],
      ],
      email: ["", [Validators.required, Validators.email]],
      location: ["", [Validators.required, this.noScriptValidator]],
      subject: [
        "",
        [
          Validators.required,
          Validators.maxLength(100),
          this.noScriptValidator,
        ],
      ],
      message: [
        "",
        [
          Validators.required,
          Validators.maxLength(1000),
          this.noScriptValidator,
        ],
      ],
    });

    this.filteredLocations = this.contactForm
      .get("location")!
      .valueChanges.pipe(
        startWith(""),
        map((value) => this._filter(value || ""))
      );
  }

  noScriptValidator(control: any) {
    const forbiddenPattern = /<script.*?>.*?<\/script>|<.*?>|javascript:/gi;
    return forbiddenPattern.test(control.value) ? { script: true } : null;
  }

  get formControls() {
    return this.contactForm.controls;
  }

  fetchAllCountries() {
    this.commonService.getCountries().subscribe({
      next: (countries: country[]) => {
        this.locations = countries.map((country) => country.name.common);
      },
    });
  }

  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.locations.filter((loc) =>
      loc.toLowerCase().includes(filterValue)
    );
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendFeedback(this.contactForm.value).subscribe({
        next: (response) => {
          this.openDialog(
            "Success",
            "Your feedback has been submitted.",
            "confirm"
          );
          this.resetForm();
        },
        error: (error) => {
          this.openDialog(
            "Error",
            "There was an error submitting your feedback. Please try again later.",
            "warning"
          );
        },
      });
    } else {
      this.openDialog(
        "Error",
        "Please fill out all required fields.",
        "warning"
      );
    }
  }

  openDialog(title: string, subtext: string, type: "confirm" | "warning") {
    return this.dialog.open(ConfirmDialogComponent, {
      data: {
        type,
        title,
        heading: type === "warning" ? "Warning" : "Confirmation",
        subtext,
        confirmText: "OK",
        cancelText: "",
      },
      width: "400px",
    });
  }

  resetForm(): void {
    this.contactForm.reset({
      name: null,
      email: null,
      location: null,
      subject: null,
      message: null,
    });

    for (const controlName in this.contactForm.controls) {
      const control = this.contactForm.get(controlName);
      control?.setErrors(null);
      control?.markAsPristine();
      control?.markAsUntouched();
      control?.updateValueAndValidity();
    }
  }
}
