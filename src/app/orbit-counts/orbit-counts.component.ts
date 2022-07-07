import { Component, OnInit, Input } from "@angular/core";
import { Satellite } from "../satellite";

@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"],
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() {}

  ngOnInit() {}

  private typeWithCounts = {};

  countByType(type: string): number {
    let count = 0;
    if (this.satellites) {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type === type) {
          count++;
        }
      }
    }
    return count;
  }

//   private handleTypeCounts() {
//     this.typeWithCounts = {};
// 	for (let s in this.satellites) {
// 		if (this.typeWithCounts[s.type]) == null {
// 			this.typeWithCounts[s.type] = 1
// 		} else {
// 			this.typeWithCounts[s.type] += 1
// 		}
// 	}
// 	return this.typeWithCounts
//   }
}
