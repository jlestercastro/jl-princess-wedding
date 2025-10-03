import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.scss'
})
export class SupplierComponent implements OnInit {
  @Input() title = 'Our Wedding Team';
  @Input() description = 'We are grateful to these talented professionals who helped make our day special';

  @Input() vendors: any[] = [
    {
      name: 'Eden Lake View Resort',
      service: 'Venue',
      facebook: 'profile.php?id=61570186525132',
      instagram: '',
      email: 'edenlakeviewresort@gmail.com',
      contact: '09778068876'
    },
    {
      name: 'Laras Dream Wedding',
      service: 'Bridal Gown',
      facebook: 'https://www.facebook.com/',
      instagram: 'larasdreamwedding',
      email: 'agustinlaurice@gmail.com',
      contact: '09171648693'
    },
    {
      name: 'Lumangbayan Tailorshop',
      service: 'Grooms Barong',
      facebook: '',
      instagram: '',
      email: '',
      contact: ''
    },
    {
      name: 'Cohn Ramos Transformation',
      service: 'Hair and Make Up Artist',
      facebook: 'CohnRamosMakeupTransformation',
      instagram: '_cohnramos',
      email: 'johnpaulconradramos@gmail.com',
      contact: '09177713246'
    },
    {
      name: 'Host Tim',
      service: 'Host',
      facebook: 'timjustine.laya',
      instagram: 'hosttim06',
      email: 'timjustinelaya06@gmail.com',
      contact: '09632773318'
    },
    {
      name: 'Xtro Photography',
      service: 'Photographer',
      facebook: 'byDaze',
      instagram: '',
      email: 'xtrophoto@gmail.com',
      contact: '09690976809'
    },
    {
      name: 'Istylist ng Bulwagan - Kim Miranda',
      service: 'Stylist',
      facebook: 'Istylistngbulwagan',
      instagram: '',
      email: 'joshuamiranda499@gmail.com',
      contact: '9976701328'
    },
    {
      name: 'Sounds & Lights',
      service: 'KDA Sounds and Lights',
      facebook: 'profile.php?id=100065171455617',
      instagram: '',
      email: '',
      contact: '09276514931'
    },
    {
      name: 'Chef (Grazing table)',
      service: 'Jericho Marasigan',
      facebook: 'akosi.jake.9615',
      instagram: '_jeric0',
      email: '',
      contact: ''
    },
    {
      name: 'Photoboot',
      service: 'TrendySmile',
      facebook: 'trendysmilesphotoboothcalapan',
      instagram: '',
      email: 'jmark_madrid@yahoo.com',
      contact: '09322654525'
    },
    {
      name: 'Souveniers',
      service: 'Into the Woods - Arts & Crafts',
      facebook: 'ITWanc',
      instagram: 'intothewoodsartsandcrafts',
      email: 'intothewoodsartsandcrafts@yahoo.com',
      contact: '09565100045'
    },
    {
      name: 'Cakes',
      service: 'Magsino Cook & Bake',
      facebook: 'profile.php?id=61551235463232',
      instagram: '',
      email: 'deovellemagsino1222@gmail.com',
      contact: '9455643110'
    }
  ];

  categories = [
    { name: 'Photography & Video', icon: 'photo_camera' },
    { name: 'Florals & Decor', icon: 'local_florist' },
    { name: 'Venue & Catering', icon: 'restaurant' },
    { name: 'Attire & Beauty', icon: 'checkroom' },
    { name: 'Music & Entertainment', icon: 'music_note' }
  ];

  filteredVendors: any[] = [];
  activeCategory = 'All';

  filterByCategory(category: string): void {
    this.activeCategory = category;
    if (category === 'All') {
      this.filteredVendors = this.vendors;
    } else {
      this.filteredVendors = this.vendors.filter(v => v.service.includes(category));
    }
  }

  ngOnInit(): void {
    this.filteredVendors = this.vendors;
  }
}
