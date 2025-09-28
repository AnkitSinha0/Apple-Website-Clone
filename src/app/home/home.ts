import { Component,AfterViewInit,HostListener } from '@angular/core';
import { Navbar } from '../core/navbar/navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Footer } from '../core/footer/footer';
@Component({
  selector: 'app-home',
  imports: [Navbar,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {
  
  
  ngAfterViewInit() {
    
    
    gsap.fromTo("#iphoneTitle",
      { opacity: 0, y: 120 },
      {
        opacity: 1, y: 0, duration: 1,
        scrollTrigger: {
          trigger: "#iphone-launch",
          start: "top 70%", 
        }
      }
    );

    gsap.fromTo("#iphonePrice",
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, delay: 0.2,
        scrollTrigger: {
          trigger: "#iphone-launch",
          start: "top 70%",
        }
      }
    );

    gsap.fromTo("#iphoneDate",
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, delay: 0.4,
        scrollTrigger: {
          trigger: "#iphone-launch",
          start: "top 70%",
        }
      }
    );


    ScrollTrigger.create({
      trigger: "#iphone-launch",
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        const video = document.getElementById("iphoneVideo") as HTMLVideoElement;
        if (video) video.play();
      },
      onLeave: () => {
        const video = document.getElementById("iphoneVideo") as HTMLVideoElement;
        if (video) video.pause();
      },
      onEnterBack: () => {
        const video = document.getElementById("iphoneVideo") as HTMLVideoElement;
        if (video) video.play();
      },
      onLeaveBack: () => {
        const video = document.getElementById("iphoneVideo") as HTMLVideoElement;
        if (video) video.pause();
      },
    });
  }
}
