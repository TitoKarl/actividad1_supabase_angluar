# Proyecto Ionic + Angular + Supabase

## Cómo arrancarlo en Visual Studio Code

1. Descomprime este ZIP.
2. Abre en Visual Studio Code la carpeta `act1_juancarlos_rodrihuez` (la carpeta que contiene `package.json`).
3. Abre **Terminal > New Terminal**.
4. Ejecuta:

```bash
ionic serve
```

El ZIP incluye `node_modules` para evitar tener que descargar todas las dependencias otra vez. Si el terminal dice que `ionic` no se reconoce, instala la CLI una sola vez:

```bash
npm install -g @ionic/cli
```

Después vuelve a ejecutar `ionic serve`.

## Requisitos

- Node.js **22.22.3 o superior dentro de la rama 22**, o una versión compatible más reciente con Angular CLI.
- npm.
- Visual Studio Code (o cualquier editor compatible).

## Supabase

La app utiliza el proyecto configurado en `src/environments/environment.ts`.
La tabla consultada se llama exactamente `Ordenadores` y el código lee `id`, `nombre`, `marca`, `ram`, `procesador` y `created_at`.

Si no aparecen datos, comprueba en Supabase que la tabla exista, que contenga registros y que las políticas RLS permitan la lectura. El código de cliente nunca debe contener una clave `service_role`; utiliza únicamente una clave publicable y políticas RLS adecuadas.
# actividad1_supabase_angluar
