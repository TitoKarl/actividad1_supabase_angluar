import { Component, OnInit, inject, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSpinner,
  IonText,
} from '@ionic/angular';
import { SupabaseService } from './supabase.service';
import { OrdenadorModel } from './models/ordenador.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSpinner, IonText],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  private supabaseService = inject(SupabaseService);

  ordenadores = signal<OrdenadorModel[]>([]);
  cargando = signal(true);
  error = signal<string | null>(null);

  async ngOnInit() {
    try {
      const datos = await this.supabaseService.getOrdenadores();
      this.ordenadores.set(datos);
    } catch (e: unknown) {
      const mensaje =
        e instanceof Error ? e.message : 'Error al cargar los ordenadores';
      this.error.set(mensaje);
      console.error('Error al cargar los ordenadores:', e);
    } finally {
      this.cargando.set(false);
    }
  }
}
