import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonLabel
} from '@ionic/angular';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
  ],
})
export class HomePage implements OnInit {
  ordenadores: any[] = [];
  error = '';

  private supabaseService = inject(SupabaseService);

  async ngOnInit() {
    try {
      this.ordenadores = await this.supabaseService.getOrdenadores();
      console.log('Ordenadores cargados:', this.ordenadores);
    } catch (e: any) {
      console.error('Supabase error:', e);
      this.error = e?.message || JSON.stringify(e);
    }
  }
}

