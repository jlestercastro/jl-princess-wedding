import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  date: string;
  category: string;
  featured?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})

export class GalleryComponent {
  // Gallery images data
  allImages: GalleryImage[] = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797888/ps1_ahtqjx.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'portraits',
      featured: true
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797595/ps12_vzbhga.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797783/ps14_tobsfe.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796844/ps17_watswz.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: true
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797790/ps16_lmrkde.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797787/ps19_gponse.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 7,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797589/ps9_hieroi.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 8,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797595/ps10_z1hhxt.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 9,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797703/ps6_n0jaii.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 10,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797638/ps30_dainvz.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 11,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759798977/ps32_lydv2u.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: true
    },
    {
      id: 12,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759798956/ps33_jcidmv.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 13,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759798953/ps35_hlpjmq.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 14,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759798955/ps37_sdh0bb.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 14,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759798954/ps34_fwc8cp.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 15,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759799390/ps41_eidtzt.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 16,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759799393/ps40_soq5da.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 17,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759799387/ps42_did1p6.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 18,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759799401/ps43_nphoai.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 19,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759799381/ps39_o4kzo4.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: true
    },
    {
      id: 20,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797708/ps5_iejebt.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: true
    },
    {
      id: 21,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797787/ps19_gponse.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 22,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797635/ps22_mrxwds.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 23,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797051/ps26_smckbu.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 24,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797051/ps26_smckbu.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 25,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797920/ps27_oaj1of.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 26,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797042/ps29_byhg8n.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 27,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797644/ps31_jpyaqp.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 28,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759799761/ps49_i53d5r.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: false
    },
    {
      id: 29,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759797643/ps28_ldntm8.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'September 2025',
      category: 'engagement',
      featured: true
    },
    {
      id: 29,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796836/s7_nbmlth.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 30,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796838/s8_reqpmx.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 31,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796805/s4_x6ww8i.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 32,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796836/s6_nuxr3r.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 33,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796811/s5_dbmwj8.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 34,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796804/s3_nceyol.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 35,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796803/s2_jx30fl.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 36,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796793/s1_utii7x.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 37,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796794/s11_rikkbl.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 38,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796793/s10_ysatcr.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 39,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796802/s18_fuhznq.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: true
    },
    {
      id: 40,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796801/s17_idwybh.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 41,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796800/s16_iarxny.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 42,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796798/s14_lc8clx.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: true
    },
    {
      id: 43,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796797/s13_itsn9s.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
    {
      id: 44,
      src: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759796792/baler_d0gnno.jpg',
      alt: 'Bride and groom portraits',
      caption: 'Bridal Portraits',
      date: 'February 2020',
      category: 'details',
      featured: false
    },
  ];

  // Categories for filtering
  categories: Category[] = [
    { id: 'all', name: 'All Photos', icon: 'bi-grid-3x3-gap-fill' },
    { id: 'engagement', name: 'Engagement', icon: 'bi-heart-fill' },
    { id: 'ceremony', name: 'Ceremony', icon: 'bi-flower1' },
    { id: 'reception', name: 'Reception', icon: 'bi-cup-straw' },
    { id: 'portraits', name: 'Portraits', icon: 'bi-camera-fill' },
    { id: 'details', name: 'Details', icon: 'bi-gem' },
    { id: 'candid', name: 'Candid', icon: 'bi-emoji-smile' }
  ];

  // Current state
  filteredImages: GalleryImage[] = [];
  activeCategory: string = 'all';
  lightboxActive: boolean = false;
  currentImageIndex: number = 0;
  imageLoaded: boolean = false;
  
  // Pagination
  itemsPerLoad: number = 8;
  currentPage: number = 1;
  hasMoreImages: boolean = true;

  // Fallback timeout for loading
  private loadingTimeout: any;

  ngOnInit(): void {
    this.filterGallery('all');
  }

  ngOnDestroy(): void {
    // Clean up any pending timeouts
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
  }

  // Filter gallery by category
  filterGallery(categoryId: string): void {
    this.activeCategory = categoryId;
    this.currentPage = 1;
    
    if (categoryId === 'all') {
      this.filteredImages = [...this.allImages];
    } else {
      this.filteredImages = this.allImages.filter(image => image.category === categoryId);
    }
    
    this.updateHasMoreImages();
  }

  // Load more images for pagination
  loadMore(): void {
    this.currentPage++;
    this.updateHasMoreImages();
  }

  // Check if there are more images to load
  private updateHasMoreImages(): void {
    const totalItems = this.activeCategory === 'all' 
      ? this.allImages.length 
      : this.allImages.filter(img => img.category === this.activeCategory).length;
    
    const loadedItems = this.itemsPerLoad * this.currentPage;
    this.hasMoreImages = loadedItems < totalItems;
  }

  // Lightbox methods
  openLightbox(index: number): void {
    this.currentImageIndex = index;
    this.lightboxActive = true;
    this.imageLoaded = false;
    
    // Set a fallback timeout in case the image load event doesn't fire
    this.loadingTimeout = setTimeout(() => {
      if (!this.imageLoaded) {
        console.warn('Image loading timeout - forcing display');
        this.imageLoaded = true;
      }
    }, 5000); // 5 second timeout
    
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  closeLightbox(): void {
    this.lightboxActive = false;
    
    // Clear any pending timeout
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
    
    document.body.style.overflow = ''; // Restore scrolling
  }

  nextImage(): void {
    if (this.currentImageIndex < this.filteredImages.length - 1) {
      this.currentImageIndex++;
      this.imageLoaded = false;
      
      // Reset timeout for new image
      if (this.loadingTimeout) {
        clearTimeout(this.loadingTimeout);
      }
      this.loadingTimeout = setTimeout(() => {
        if (!this.imageLoaded) {
          this.imageLoaded = true;
        }
      }, 5000);
    }
  }

  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.imageLoaded = false;
      
      // Reset timeout for new image
      if (this.loadingTimeout) {
        clearTimeout(this.loadingTimeout);
      }
      this.loadingTimeout = setTimeout(() => {
        if (!this.imageLoaded) {
          this.imageLoaded = true;
        }
      }, 5000);
    }
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
    this.imageLoaded = false;
    
    // Reset timeout for new image
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
    this.loadingTimeout = setTimeout(() => {
      if (!this.imageLoaded) {
        this.imageLoaded = true;
      }
    }, 5000);
  }

  onImageLoad(): void {
    this.imageLoaded = true;
    
    // Clear the timeout since image loaded successfully
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
  }

  onImageError(): void {
    console.error('Failed to load image:', this.currentImage?.src);
    this.imageLoaded = true; // Stop showing loading spinner even on error
    
    // Clear the timeout
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
  }

  // Helper methods
  get currentImage(): GalleryImage | null {
    return this.filteredImages[this.currentImageIndex] || null;
  }

  getCategoryIcon(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category?.icon || 'bi-image';
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category?.name || 'Unknown';
  }

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (this.lightboxActive) {
      switch (event.key) {
        case 'Escape':
          this.closeLightbox();
          break;
        case 'ArrowLeft':
          this.previousImage();
          break;
        case 'ArrowRight':
          this.nextImage();
          break;
      }
    }
  }

  // Prevent background scrolling when lightbox is open
  @HostListener('window:popstate', ['$event'])
  onPopState(event: any): void {
    if (this.lightboxActive) {
      this.closeLightbox();
    }
  }
}
