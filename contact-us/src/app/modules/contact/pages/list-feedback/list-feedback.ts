import { Component } from "@angular/core";
import { ContactService } from "../../services/contactService";
import { MatDialog } from "@angular/material/dialog";
import { MaximizedView } from "../../../../shared/maximized-view/maximized-view";
import { ConfirmDialogComponent } from "../../../../shared/confirm-dialog/confirm-dialog";

@Component({
  standalone: false,
  selector: "app-list-feedback",
  templateUrl: "./list-feedback.html",
  styleUrl: "./list-feedback.scss",
})
export class ListFeedback {
  allFeedbacks: any[] = [];

  constructor(
    private contactService: ContactService,
    private dialog: MatDialog
  ) {
    this.contactService.getFeedbacks().subscribe((feedbacks) => {
      this.allFeedbacks = feedbacks;
    });
  }

  deleteFeedback(feedback: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        type: "warning",
        title: "Confirm Delete",
        heading: "Are you sure?",
        subtext: `Delete feedback from "${feedback.name}"?`,
        confirmText: "Delete",
        cancelText: "Cancel",
      },
      width: "400px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.contactService.deleteFeedback(feedback.id).subscribe({
          next: () => {
            this.allFeedbacks = this.allFeedbacks.filter(
              (f) => f.id !== feedback.id
            );
          },
          error: (err:any) => {
            console.error("Failed to delete feedback", err);
          },
        });
      }
    });
  }

  openFeedbackModal(feedback: any) {
    this.dialog.open(MaximizedView, {
      data: feedback,
    });
  }
}
