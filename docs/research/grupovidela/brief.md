# Brief: grupovidela.com → Ocho Onzas

Estructura y estilo tomados de https://grupovidela.com/ (portada). Contenido, fotos y datos reales de
https://ochoonzas.com/; los textos que no tenían equivalente se reescribieron con la guía de voz de marca de Ocho Onzas.
No se reutiliza ningún logo, icono, foto ni texto de Grupo Videla.

## Mapa de rutas

| Origen | Local | Archivos |
|---|---|---|
| grupovidela.com/ (portada) | `/` | `src/app/page.tsx`, `src/components/sites/ochoonzas/*` |
| Páginas de producto de ochoonzas.com (pollo, cerdo, vaca, embutidos, piezas, enteros, cefalópodos, pavo, mariscos, frutas, del mar, de la tierra) | `/productos` | `src/app/productos/page.tsx`, `products-data.ts` |

## Secciones (orden de la referencia)

1. Cabecera fija de 64 px, transparente sobre la portada y blanca al hacer scroll; menú Montserrat 13 px/600 con desplegables de 240 px y borde superior de 3 px.
2. Portada de 660 px con fondo fijo, logo centrado y lema en Raleway 33 px → "Tu aliado en la mesa".
3. ¿Quiénes somos? (título 22 px/400 + subtítulo 20 px/300; texto 15/22,5 px), historia del nombre y 4 valores con iconos de trazo.
4. Carrusel de 1152×492 con fundido, flechas al pasar el ratón y puntos → diferenciales (a tu medida, fresco de hoy, de la tierra, del mar).
5. ¿Qué hacemos? con cita de borde azul y botón con borde de 2 px y radio de 5 px.
6. Carrusel a todo el ancho de 400 px con caja blanca translúcida → hostelería, al detalle, la tienda, reparto.
7. Productos: título de 40 px con línea, 3 tarjetas verticales (720:1191) con banda en Barlow Condensed y banner rotativo de 200 px.
8. Contáctanos sobre #f2f2f2: formulario de campos grises y tres columnas → la tienda, reparto y pedidos (+ mapa).
9. Pie oscuro rgba(0,0,0,.84) con dirección y enlaces legales.

## Colores y tipografía

- Referencia: acento #006f9b. Ocho Onzas (manual): textos en gris #54585A y azul #9BCBEB en líneas, bordes e iconos.
- Helvetica Neue Light en toda la web, según el manual (en la referencia: Montserrat, Raleway y Barlow Condensed).

## Decisiones y huecos

- El formulario no tiene servidor: abre WhatsApp con el mensaje ya escrito (canal principal de pedidos según la guía).
- El enlace "¿Quieres formar parte de nuestro equipo?" se sustituyó por el gancho B2B "¿Tienes bar, restaurante o guachinche?".
- No se ha reproducido el aviso de cookies ni el selector de idiomas de la referencia.
- Los enlaces legales apuntan a las páginas actuales de ochoonzas.com.

## Información confirmada por el cliente (noviembre de 2026)

- Ya no hay puesto en el Mercado Municipal del Puerto de la Cruz (traspasado a mediados de octubre): única tienda en Los Realejos.
- Nombre: 8 onzas de sal (226 g) era el salario de los jornaleros. La web mantiene "Ocho Onzas" escrito, como el logotipo y la razón social.
- Historia: empieza hacia 2014 con la trayectoria de Ricardo Molini; gestión renovada desde 2018 por Manuel Molini.
- Sin producto estrella: la cercanía, la sinceridad y la calidad-precio (sin producto de baja gama).
- Venta por mayor y por menor (por caja, por pieza o por unidad); tarifa más barata para negocios y descuento por caja entera.
- Km 0 puntual (excedentes de agricultores locales); huevos, pan, bollería y carne fresca siempre de producto local.
- Reparto: norte de Tenerife (de Buenavista a Santa Cruz), martes y viernes; jueves y sábados para algunos clientes; a partir de 50 € (sin indicar coste).
- Horario: de lunes a viernes, de 9:00 a 20:30.
- Nombre en textos: "Ocho Onzas" (como el logotipo); "8 onzas" solo para contar el origen.
- Modelo único: carnicería + congelados + conservas, bebidas y licores.

## Identidad (Manual corporativo)

- Colores: gris Pantone 425C (#54585A) como principal y azul Pantone 291C (#9BCBEB). Sobre fondo oscuro, logotipo azul.
- Tipografía secundaria: Helvetica Neue Light. Logotipos e iconos de categoría extraídos del PDF de logos originales
  en `public/sites/ochoonzas/brand/`.
