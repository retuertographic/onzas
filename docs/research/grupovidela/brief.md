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
3. ¿Quiénes somos? (título 22 px/400 + subtítulo 20 px/300 en azul; texto 15/22,5 px #666) y 4 valores con iconos de trazo → pilares de marca.
4. Carrusel de 1152×492 con fundido, flechas al pasar el ratón y puntos → diferenciales (a tu medida, fresco de hoy, de la tierra, del mar).
5. ¿Qué hacemos? con cita de borde azul y botón con borde de 2 px y radio de 5 px.
6. Carrusel a todo el ancho de 400 px con caja blanca translúcida → hostelería, troceado, Los Realejos, Mercado del Puerto, reparto.
7. Productos: título de 40 px con línea, 3 tarjetas verticales (720:1191) con banda en Barlow Condensed y banner rotativo de 200 px.
8. Contáctanos sobre #f2f2f2: formulario de campos grises y tres columnas de direcciones → las dos tiendas y pedidos (+ mapa).
9. Pie oscuro rgba(0,0,0,.84) con dirección y enlaces legales.

## Colores y tipografía

- Referencia: acento #006f9b. Ocho Onzas: azul de marca #9bcbeb (líneas) y #2a76a8 como versión legible para texto; gris del rótulo #54595f.
- Montserrat (cuerpo y títulos), Raleway (lema), Barlow Condensed (rótulos sobre imagen; en la referencia vienen dentro de las fotos).

## Decisiones y huecos

- El formulario no tiene servidor: abre WhatsApp con el mensaje ya escrito (canal principal de pedidos según la guía).
- El enlace "¿Quieres formar parte de nuestro equipo?" se sustituyó por el gancho B2B "¿Tienes bar, restaurante o guachinche?".
- No se ha reproducido el aviso de cookies ni el selector de idiomas de la referencia.
- Los enlaces legales apuntan a las páginas actuales de ochoonzas.com.
- Pendiente de confirmar con el cliente (ver "Cuestiones" de la guía): zonas y días de reparto, nombres de cosecheros,
  productos de elaboración propia, horarios y fotos reales del puesto del Mercado. No se ha inventado ninguno de esos datos.
