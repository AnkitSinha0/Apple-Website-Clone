import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements AfterViewInit {
  @ViewChild('footerLinks', { static: true }) footerLinks!: ElementRef;

  ngAfterViewInit(): void {
 
    const links = this.footerLinks.nativeElement.querySelectorAll('a');

    gsap.from(links, {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.footerLinks.nativeElement,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
      }
    });
  }
}
