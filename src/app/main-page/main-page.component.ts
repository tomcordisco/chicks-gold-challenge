import { Component } from '@angular/core';
import { AssetPaths } from '../asset-paths';
import { CommonModule } from '@angular/common';

interface Product {
  quantity: number;
  sale: string;
  stock: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  description: string;
  cartImage: string;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  assetPaths = AssetPaths;

  products: Product[] = Array(15).fill({
    quantity: 1,
    sale: 'On sale',
    stock: 'In stock',
    image: this.assetPaths.game,
    title: 'Zelda',
    price: 400,
    oldPrice: 500,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elitr.',
    cartImage: this.assetPaths.cart
  });
}
