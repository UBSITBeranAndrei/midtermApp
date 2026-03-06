import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {

  selectedProduct: Product | null = null;
  showModal: boolean = false;

  products: Product[] = [
    { id: 1, name: 'Mechanical Keyboard', category: 'Electronics', price: 2999, stock: 15, status: 'Available', description: 'RGB mechanical keyboard with tactile switches.', brand: 'KeyMaster', rating: 4.5, imageUrl: '' },
    { id: 2, name: 'Wireless Mouse', category: 'Electronics', price: 1299, stock: 0, status: 'Out of Stock', description: 'Ergonomic wireless mouse with long battery life.', brand: 'LogiTech', rating: 4.2, imageUrl: '' },
    { id: 3, name: 'USB-C Hub', category: 'Accessories', price: 899, stock: 3, status: 'Limited', description: '7-in-1 USB-C hub with HDMI and SD card slots.', brand: 'HubPro', rating: 4.0, imageUrl: '' },
    { id: 4, name: 'Gaming Headset', category: 'Electronics', price: 3499, stock: 10, status: 'Available', description: 'Surround sound gaming headset with noise-cancelling mic.', brand: 'SoundBlast', rating: 4.7, imageUrl: '' },
    { id: 5, name: 'Laptop Stand', category: 'Accessories', price: 699, stock: 25, status: 'Available', description: 'Adjustable aluminum laptop stand for better ergonomics.', brand: 'ErgoRise', rating: 4.3, imageUrl: '' },
    { id: 6, name: 'Webcam 1080p', category: 'Electronics', price: 1999, stock: 2, status: 'Limited', description: 'Full HD webcam with built-in microphone.', brand: 'ClearVision', rating: 4.1, imageUrl: '' },
    { id: 7, name: 'Monitor 24"', category: 'Electronics', price: 12999, stock: 0, status: 'Out of Stock', description: 'IPS Full HD monitor with 75Hz refresh rate.', brand: 'ViewMax', rating: 4.6, imageUrl: '' },
    { id: 8, name: 'Desk Lamp', category: 'Office', price: 549, stock: 30, status: 'Available', description: 'LED desk lamp with adjustable color temperature.', brand: 'BrightDesk', rating: 3.9, imageUrl: '' },
    { id: 9, name: 'External SSD 1TB', category: 'Storage', price: 4599, stock: 7, status: 'Available', description: 'Compact and fast external SSD with USB 3.2.', brand: 'SpeedStore', rating: 4.8, imageUrl: '' },
    { id: 10, name: 'Mouse Pad XL', category: 'Accessories', price: 399, stock: 1, status: 'Limited', description: 'Extra-large mouse pad with stitched edges.', brand: 'DeskMate', rating: 4.0, imageUrl: '' },
  ];

  viewProductDetails(product: Product): void {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProduct = null;
  }
}