import { asset } from "./asset";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface PostOrder {
  label: string;
  category: string;
  product?: string;
}

export interface Post {
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  category: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  body: Block[];
  gallery?: { src: string; alt: string }[];
  orders?: PostOrder[];
}

const img = (file: string) => asset(`/sites/ochoonzas/blog/${file}`);

// Ordenados del más reciente al más antiguo.
export const posts: Post[] = [
  {
    slug: "langostinos-salvajes-navidad",
    title: "Ya están aquí los langostinos salvajes de Navidad",
    date: "2026-11-25",
    category: "Navidad",
    excerpt:
      "Tres calibres para elegir: N.º 1 a 22,98, N.º 2 a 21,98 y N.º 3 a 18,98. Pásate por Los Realejos y elige los tuyos antes de que vuelen.",
    cover: img("langostinos-navidad.jpg"),
    coverAlt: "Caja de langostinos salvajes congelados en la tienda de Ocho Onzas",
    body: [
      { type: "p", text: "Ya están en la tienda los langostinos salvajes de estas Navidades. Llegan en caja, bien colocados y listos para que elijas el calibre que mejor le va a tu mesa." },
      { type: "h2", text: "Elige tu calibre" },
      {
        type: "ul",
        items: [
          "N.º 1, a 22,98: los más grandes. Piezas que hablan por sí solas, para que la cena de Nochebuena luzca desde el primer plato.",
          "N.º 2, a 21,98: para el aperitivo. A la plancha o cocidos, el entrante de las fiestas ya está resuelto.",
          "N.º 3, a 18,98: el de mejor precio. Langostino salvaje para todas las mesas. Lo bueno, a precio de barrio.",
        ],
      },
      { type: "p", text: "¿No sabes cuál coger? Pregúntanos en la tienda y te decimos cuál le va mejor a tu menú y cuánto necesitas según los que seáis en la mesa." },
      { type: "h2", text: "En diciembre el marisco vuela" },
      { type: "p", text: "Si los quieres para Nochebuena o Nochevieja, encárgalos con tiempo. Dinos por WhatsApp qué calibre y cuántas cajas quieres, te los apartamos y los recoges sin colas en la tienda." },
      { type: "quote", text: "C. la Zamora, 12 · Los Realejos. De lunes a sábado, de 9:00 a 20:30. WhatsApp 629 52 92 20." },
    ],
    gallery: [
      { src: img("langostinos/01-ya-han-llegado.jpg"), alt: "Langostinos salvajes para estas Navidades: N.º 1 a 22,98, N.º 2 a 21,98 y N.º 3 a 18,98" },
      { src: img("langostinos/02-calibre-n1.jpg"), alt: "Langostino salvaje N.º 1, el calibre más grande, a 22,98" },
      { src: img("langostinos/03-calibre-n2.jpg"), alt: "Langostino salvaje N.º 2, para la mesa de Navidad, a 21,98" },
      { src: img("langostinos/04-calibre-n3.jpg"), alt: "Langostino salvaje N.º 3, lo bueno a precio de barrio, a 18,98" },
      { src: img("langostinos/05-elige-tu-calibre.jpg"), alt: "Elige tu calibre de langostino salvaje" },
      { src: img("langostinos/06-encarga-con-tiempo.jpg"), alt: "Encárgalos con tiempo y te los apartamos" },
    ],
    orders: [
      { label: "Pedir N.º 1", category: "langostino salvaje de Navidad", product: "calibre N.º 1" },
      { label: "Pedir N.º 2", category: "langostino salvaje de Navidad", product: "calibre N.º 2" },
      { label: "Pedir N.º 3", category: "langostino salvaje de Navidad", product: "calibre N.º 3" },
    ],
  },
  {
    slug: "encarga-tu-marisco-de-navidad",
    title: "La cena de Nochebuena empieza aquí: encarga tu marisco con tiempo",
    date: "2026-11-20",
    category: "Navidad",
    excerpt:
      "Gambas, langostinos, cigalas, langosta, bogavante y mucho más. Encarga con tiempo y te lo tenemos apartado para que lo recojas sin colas.",
    cover: img("marisco-navidad.jpg"),
    coverAlt: "Marisco preparado para una mesa de Navidad",
    body: [
      { type: "p", text: "Cada año pasa lo mismo: llega la última semana de diciembre y todo el mundo quiere marisco a la vez. Si lo encargas antes, te ahorras la carrera y te aseguras lo que quieres." },
      { type: "h2", text: "Lo que tienes en el mostrador" },
      {
        type: "ul",
        items: [
          "Gambas, langostinos y cigalas, para el aperitivo o la plancha.",
          "Langosta y bogavante, para la cena grande.",
          "Nécoras y buey, para quien disfruta pelando.",
          "Navajas, mejillones, almejas, coquinas y zamburiñas, para los entrantes y el arroz.",
        ],
      },
      { type: "h2", text: "Cómo encargarlo" },
      { type: "p", text: "Escríbenos por WhatsApp al 629 52 92 20: dinos qué quieres, cuánto y para qué día. Te lo apartamos y lo recoges en la tienda de Los Realejos, de lunes a sábado de 9:00 a 20:30." },
      { type: "quote", text: "Tú pones la mesa; lo demás, déjanoslo a nosotros." },
    ],
    orders: [{ label: "Encargar marisco", category: "marisco para Navidad" }],
  },
  {
    slug: "pota-poton-calamar-pulpo-choco",
    title: "Pota, potón, calamar, pulpo y choco: cuál elegir para cada plato",
    date: "2026-11-17",
    category: "Del mostrador a tu cocina",
    excerpt:
      "No es lo mismo un guiso que una plancha. Te contamos para qué va mejor cada cefalópodo que tienes en la tienda.",
    cover: img("cefalopodos.jpg"),
    coverAlt: "Calamares frescos en un plato",
    body: [
      { type: "p", text: "En la tienda tenemos cinco cefalópodos congelados y cada uno tiene su sitio en la cocina. Si dudas, pregúntanos y te decimos cuál le va a tu plato." },
      {
        type: "ul",
        items: [
          "Calamar: el clásico. En anillas, rebozado o a la plancha, siempre funciona.",
          "Pota y potón: más carnosos y de buen precio. Perfectos para guisos, arroces y salsas con tiempo de cocción.",
          "Pulpo: cocido, con unas papas y un buen aceite, no necesita mucho más.",
          "Choco: tierno a la plancha y muy agradecido en guisos y arroces.",
        ],
      },
      { type: "h2", text: "Un truco del mostrador" },
      { type: "p", text: "Descongélalos despacio, en la nevera y de víspera. Así mantienen mejor la textura y no sueltan tanta agua en la sartén." },
    ],
    orders: [{ label: "Pedir cefalópodos", category: "cefalópodos (congelados)" }],
  },
  {
    slug: "pedidos-por-whatsapp",
    title: "Haz tu pedido por WhatsApp desde la web",
    date: "2026-11-13",
    category: "Noticias",
    excerpt:
      "Cada producto y cada categoría de la web tiene ahora su botón de pedido. Lo pulsas, se abre WhatsApp con el mensaje ya escrito y solo tienes que decirnos cuánto quieres.",
    cover: img("pedidos-por-whatsapp.jpg"),
    coverAlt: "Mano escribiendo un mensaje en el móvil",
    body: [
      { type: "p", text: "Ya puedes hacernos el pedido sin llamar y sin esperar. En la página de productos, cada pieza y cada familia tienen un botón verde de WhatsApp." },
      { type: "h2", text: "Cómo funciona" },
      {
        type: "ul",
        items: [
          "Busca el producto o la categoría que quieres y pulsa «Pedir».",
          "Se abre WhatsApp con el mensaje ya escrito: qué producto es y de qué categoría.",
          "Completa la cantidad, el corte o la preparación y si lo recoges en tienda.",
          "Envíalo. Te lo preparamos y te avisamos cuando esté listo.",
        ],
      },
      { type: "p", text: "Y si no sabes muy bien qué quieres, usa la burbuja verde que tienes siempre abajo a la derecha: «¿Qué te ponemos?». Escríbenos y te aconsejamos." },
      { type: "quote", text: "WhatsApp 629 52 92 20. Recogida en la tienda de Los Realejos, de lunes a sábado de 9:00 a 20:30." },
    ],
  },
  {
    slug: "producto-local",
    title: "Lo de aquí: huevos, pan, bollería y carne fresca de producto local",
    date: "2026-11-10",
    category: "Producto local",
    excerpt:
      "Hay cosas que se compran cerca. Por eso los huevos, el pan, la bollería y la carne fresca que vendemos son siempre de producto local.",
    cover: img("producto-local.jpg"),
    coverAlt: "Huevos frescos y pan",
    body: [
      { type: "p", text: "En Ocho Onzas lo tenemos claro: los huevos, el pan, la bollería y la carne fresca son siempre de producto local. Es lo que más se nota en la mesa del día a día." },
      { type: "h2", text: "Carne fresca de aquí" },
      { type: "p", text: "La carne fresca es producto local. La refrigerada la traemos de los mejores productores de Sudamérica, para que tengas donde elegir según el plato y el bolsillo." },
      { type: "h2", text: "Para el desayuno y la merienda" },
      { type: "p", text: "Huevos, pan y bollería de aquí, para que no tengas que ir a otro sitio. Pásate por la tienda y llévate lo de la semana de una vez." },
      { type: "quote", text: "Comprar lo de aquí es comer mejor." },
    ],
  },
  {
    slug: "reparto-hosteleria",
    title: "¿Tienes bar, restaurante o guachinche? Te lo llevamos al local",
    date: "2026-11-06",
    category: "Hostelería",
    excerpt:
      "Repartimos a negocios por el norte, de Buenavista a Santa Cruz, los martes y viernes, a partir de 50 €. Con tarifa de negocio y cortes a tu medida.",
    cover: img("reparto-hosteleria.jpg"),
    coverAlt: "Cocina profesional de un restaurante",
    body: [
      { type: "p", text: "Si tienes un negocio de hostelería, no hace falta que bajes a la tienda. Te preparamos el pedido y te lo llevamos al local." },
      { type: "h2", text: "Cómo es el reparto" },
      {
        type: "ul",
        items: [
          "Solo para empresas y hostelería.",
          "Zona: norte de Tenerife, de Buenavista a Santa Cruz.",
          "Días: martes y viernes. Jueves y sábados, para algunos clientes, según la ruta.",
          "A partir de 50 €.",
        ],
      },
      { type: "h2", text: "Lo que te ofrecemos" },
      { type: "p", text: "Tarifa de negocio, descuento si te llevas la caja entera y cortes a la medida de tu carta: dinos el peso y la ración y te lo dejamos listo." },
      { type: "quote", text: "Cuéntanos tu carta y te preparamos propuesta." },
    ],
    orders: [{ label: "Pedir propuesta para mi negocio", category: "pedido para hostelería" }],
  },
  {
    slug: "por-caja-por-pieza-o-por-unidad",
    title: "Por caja, por pieza o por unidad: llévate lo que necesitas",
    date: "2026-11-03",
    category: "Así trabajamos",
    excerpt:
      "¿40 croquetas o solo las de la cena? Vendemos al por mayor y al por menor, y si te llevas la caja entera, tiene descuento.",
    cover: img("por-caja-o-por-unidad.jpg"),
    coverAlt: "Croquetas en una bandeja",
    body: [
      { type: "p", text: "En la tienda no te obligamos a llevarte más de lo que vas a usar. Puedes comprar por caja, por pieza o por unidad." },
      { type: "h2", text: "Un ejemplo" },
      { type: "p", text: "Si quieres 40 croquetas de pollo para una celebración, te las preparamos. Y si solo quieres las de la cena de hoy, también." },
      { type: "h2", text: "Al por mayor y al por menor" },
      {
        type: "ul",
        items: [
          "Si tienes un negocio, tienes tarifa de negocio, más ajustada.",
          "Si te llevas la caja entera, tiene descuento.",
          "Y si vienes a por lo de casa, te ponemos justo lo que necesitas.",
        ],
      },
      { type: "quote", text: "Comer bien no debería ser un lujo." },
    ],
    orders: [{ label: "Hacer un pedido", category: "productos por caja o por unidad" }],
  },
  {
    slug: "chistorra-cena-10-minutos",
    title: "¿Cena en 10 minutos? Chistorra, sartén y listo",
    date: "2026-10-27",
    category: "Recetas",
    excerpt:
      "Sartén sin aceite, fuego medio y vuelta y vuelta. Con pan y unas papas, cena resuelta.",
    cover: img("chistorra-10-minutos.jpg"),
    coverAlt: "Sartén con chorizo, huevos y papas",
    body: [
      { type: "p", text: "Hay noches en las que no apetece complicarse. Para esas, la chistorra fresca es una aliada." },
      { type: "h2", text: "Cómo hacerla" },
      {
        type: "ul",
        items: [
          "Pon la sartén a fuego medio, sin aceite: la chistorra suelta su propia grasa.",
          "Échala entera o en trozos y dale vuelta y vuelta hasta que esté dorada.",
          "Sácala sobre papel de cocina un momento.",
          "Sírvela con pan y unas papas. Cena resuelta.",
        ],
      },
      { type: "p", text: "La tienes fresca en la tienda, junto a las salchichas, los chorizos parrilleros y las morcillas." },
    ],
    orders: [{ label: "Pedir chistorra", category: "embutidos (frescos)", product: "chistorras" }],
  },
  {
    slug: "una-sola-tienda-los-realejos",
    title: "Ahora, una sola tienda: te esperamos en Los Realejos",
    date: "2026-10-20",
    category: "Noticias",
    excerpt:
      "A mediados de octubre traspasamos el puesto del Mercado Municipal del Puerto de la Cruz. Desde ahora nos encuentras en C. la Zamora, 12.",
    cover: img("una-sola-tienda.jpg"),
    coverAlt: "Mostrador de carnicería con cortes de carne",
    body: [
      { type: "p", text: "A mediados de octubre traspasamos los puestos 16 y 17 del Mercado Municipal del Puerto de la Cruz. Queremos dar las gracias a todos los que nos habéis comprado allí." },
      { type: "h2", text: "Dónde encontrarnos" },
      {
        type: "ul",
        items: [
          "Tienda de Los Realejos: C. la Zamora, 12, 38419 Los Realejos.",
          "Horario: de lunes a sábado, de 9:00 a 20:30. Domingo cerrado.",
          "Teléfono: 922 346 145. WhatsApp: 629 52 92 20.",
        ],
      },
      { type: "p", text: "Si venías al mercado, aquí tienes lo mismo y más: carnicería, congelados, conservas, bebidas y licores en una sola tienda. Y si quieres, encárgalo por WhatsApp y lo recoges sin colas." },
      { type: "quote", text: "Aquí te conocemos por tu nombre." },
    ],
  },
  {
    slug: "congelado-bien-elegido",
    title: "Congelado bien elegido, comida bien resuelta",
    date: "2026-10-13",
    category: "Congelados",
    excerpt:
      "Pescado, marisco, verdura, fruta y precocinados ultracongelados, para que conserven su sabor y su textura. Te contamos cómo sacarles partido.",
    cover: img("ultracongelado.jpg"),
    coverAlt: "Producto congelado",
    body: [
      { type: "p", text: "Todo lo que vendemos congelado está ultracongelado. Eso quiere decir que se congela muy rápido, y así mantiene las características propias del producto: su sabor, su textura y su aspecto." },
      { type: "h2", text: "Qué tienes en el congelador de la tienda" },
      {
        type: "ul",
        items: [
          "Pescado en piezas y entero: merluza, bacalao, salmón, cantarero, sardinas, caballas…",
          "Marisco y cefalópodos.",
          "Fruta y verdura, listas para batidos, postres y guarniciones.",
          "Precocinados del mar y de la tierra, para cuando no hay tiempo.",
        ],
      },
      { type: "h2", text: "Tres consejos de mostrador" },
      {
        type: "ul",
        items: [
          "Descongela en la nevera, de víspera, nunca a temperatura ambiente.",
          "Lo que ya has descongelado, no lo vuelvas a congelar.",
          "Los precocinados van directos del congelador a la sartén, el horno o la freidora.",
        ],
      },
    ],
    orders: [{ label: "Pedir congelados", category: "congelados" }],
  },
  {
    slug: "como-pedir-el-corte",
    title: "Para la plancha, el horno o la brasa: cómo pedir el corte",
    date: "2026-10-06",
    category: "Del mostrador a tu cocina",
    excerpt:
      "Dinos qué vas a cocinar y para cuántos, y te cortamos la pieza como la necesitas. Así sale bien a la primera.",
    cover: img("corte-a-tu-medida.jpg"),
    coverAlt: "Carnicero cortando carne en el mostrador",
    body: [
      { type: "p", text: "El mejor consejo que te podemos dar es sencillo: cuéntanos qué vas a hacer. Con eso, nosotros elegimos la pieza y el corte." },
      { type: "h2", text: "Lo que nos ayuda saber" },
      {
        type: "ul",
        items: [
          "Qué plato vas a preparar: plancha, horno, brasa, guiso o caldo.",
          "Para cuántas personas es.",
          "El grosor o el peso, si lo tienes claro.",
        ],
      },
      { type: "h2", text: "Algunas ideas" },
      {
        type: "ul",
        items: [
          "Entrecot o solomillo: para la plancha y la brasa. Dinos el grosor y te lo cortamos al momento.",
          "Costillar de cerdo: para la brasa del domingo. Tú pones la brasa, nosotros lo dejamos listo.",
          "Aguja, falda o rabo: para guisos y caldos con tiempo.",
          "Pollo entero o en piezas: como te venga mejor para el horno o la sartén.",
        ],
      },
      { type: "quote", text: "Dinos el peso y el corte, y te lo dejamos listo." },
    ],
    orders: [{ label: "Pedir carne fresca", category: "carne fresca" }],
  },
  {
    slug: "por-que-nos-llamamos-ocho-onzas",
    title: "¿Por qué nos llamamos Ocho Onzas?",
    date: "2026-10-01",
    category: "Nuestra historia",
    excerpt:
      "Antiguamente, 8 onzas de sal —unos 226 gramos— era el salario de los jornaleros. De ahí viene nuestro nombre.",
    cover: img("nombre-ocho-onzas.jpg"),
    coverAlt: "Sal gruesa",
    body: [
      { type: "p", text: "Mucha gente nos lo pregunta en el mostrador. La respuesta tiene que ver con la sal." },
      { type: "h2", text: "Ocho onzas de sal" },
      { type: "p", text: "Antiguamente, a los jornaleros se les pagaba con sal. Ocho onzas, unos 226 gramos, era el salario por su trabajo. Nos gustó la idea: lo justo por un trabajo bien hecho." },
      { type: "h2", text: "De 2014 a hoy" },
      { type: "p", text: "Ocho Onzas empezó hacia 2014 con la trayectoria de Ricardo Molini. Desde 2018 la lleva Manuel Molini, con la gestión renovada y la misma forma de tratar a la gente: con cercanía, con sinceridad y con buena relación calidad-precio." },
      { type: "quote", text: "Tu aliado en la mesa." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T12:00:00Z`),
  );
