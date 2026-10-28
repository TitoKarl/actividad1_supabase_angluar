import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';
import { OrdenadorModel } from './models/ordenador.model';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // La tabla en Supabase se llama "Ordenadores" (con mayúscula inicial).
  async getOrdenadores(): Promise<OrdenadorModel[]> {
    const { data, error } = await this.supabase
      .from('Ordenadores')
      .select('id, nombre, marca, ram, procesador, created_at')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data ?? [];
  }
}
