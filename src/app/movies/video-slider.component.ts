import { HostListener, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { VideoSliderDirective } from "./video-slider.directive";

@Component({
  selector: 'videoSlider',
  exportAs: 'videoSlider',
  template: `
  
    <div class="video-slider" #videoSlider>
      <div *ngFor="let video of videos;" class="video-item fast-transition">
        <ng-container [ngTemplateOutlet]="video.tpl"></ng-container>
      </div>
    </div>
  
  <div *ngIf="showControls" style="margin-top: 1em" class="video-slider-controls">
    <div class="video-slider-arrows left fast-transition" (click)="prevSlide()">
        <i class="fas fa-chevron-left"></i>
    </div>
    <div class="video-slider-arrows right fast-transition" (click)="nextSlide()">
        <i class="fas fa-chevron-right"></i>
    </div>
  </div>
`,
  styleUrls: ['./video-slider.component.scss']
})
export class VideoSliderComponent implements OnInit {

  screenWidth:number;

  constructor() {  this.getScreenWidth(); }

  
  @ContentChildren(VideoSliderDirective) videos : QueryList<VideoSliderDirective>;
  @ViewChild('videoSlider') private video_slider : ElementRef;
  @Input() showControls = true;
  @HostListener('window:resize', ['$event'])

  getScreenWidth() {
    this.screenWidth = window.innerWidth;
  }

  nextSlide() {
    this.video_slider.nativeElement.scrollLeft += this.screenWidth;
  }
  prevSlide() {
    this.video_slider.nativeElement.scrollLeft -= this.screenWidth;
  }

  ngOnInit() {

  }
  



}
