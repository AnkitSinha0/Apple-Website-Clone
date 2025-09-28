import { Component, AfterViewInit, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [NgIf],
})
export class Navbar implements AfterViewInit {
  @ViewChild('navBar', { static: true }) navBar!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu?: ElementRef;
  @ViewChildren('navLink') navLinks!: QueryList<ElementRef>;
  menuOpen = false;
  private resizeHandler = () => {
    const w = window.innerWidth;
    if (w >= 768 && this.menuOpen) {
      if (this.mobileMenu?.nativeElement) {
        gsap.to(this.mobileMenu.nativeElement, {
          x: 250,
          opacity: 0,
          duration: 0.25,
          ease: 'power2.in',
          onComplete: () => { this.menuOpen = false; }
        });
      } else {
        this.menuOpen = false;
      }
    }
  };

  ngAfterViewInit() {
    // Slide down navbar
    gsap.from(this.navBar.nativeElement, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });


    this.navLinks.forEach((link, i) => {
      gsap.from(link.nativeElement, {
        opacity: 0,
        y: -20,
        delay: 0.5 + i * 0.1, 
        duration: 0.6,
        ease: 'power3.out'
      });
    });

    gsap.to(this.navBar.nativeElement, {
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      backgroundColor: 'rgba(0,0,0,0.95)',
      height: '56px',
      duration: 0.3
    });

    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
    constructor(private router: Router) {}  

  goToApplePay() {
    this.router.navigate(['/applepay']);
  }
}
