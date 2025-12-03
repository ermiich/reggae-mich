export const locales = ['es', 'en', 'fr'];

export const translations = {
  es: {
    home: 'Inicio',
    cocktails: 'Cócteles',
    contact: 'Contacto',
    information: 'Información',
    welcomeMsg: 'Bienvenidos al',
    mWords: ['REGGAE BAR', 'SITIO IDEAL','BUEN ROLLO', 'PARAÍSO'],
    offerTitle: 'LO FAVORITO DEL CLIENTE',
    offers: [
      { title: 'Cócteles', description: 'Disfruta de una variedad de cócteles exóticos y refrescantes.' },
      { title: 'Cervezas', description: 'Prueba nuestras cervezas locales e internacionales.' },
      { title: 'Shishas', description: 'Relájate con nuestras shishas de sabores únicos.' },
    ],
    ratingTitle: 'Nuestras Valoraciones',
    contactAddress: 'Calle Monaco 6, Los Cristianos, Tenerife',
    contactHours: 'Lunes a Sábado: 21:30 - 02:00',
    contactPhone: '+34 666 017 531',
    contactEmail: 'koj.tenerife@gmail.com',
    siteName: 'Reggae Bar',
    seo: {
      home: {
        title: 'Reggae Bar - Inicio',
        description: 'Bienvenidos al Reggae Bar - disfruta de cócteles, música y buen ambiente.'
      },
      cocktails: {
        title: 'Reggae Bar - Cócteles',
        description: 'Explora nuestra selección de cócteles exóticos y refrescantes.'
      },
      contact: {
        title: 'Reggae Bar - Contacto',
        description: 'Encuéntranos, consulta horarios y contáctanos por teléfono o email.'
      }
    }
    ,
    reviewModal: {
      title: [
        '¡Cuéntanos tu experiencia!',
        "Comenta tu 'Buen Rollo'"
      ],
      body: 'Escanea el QR o pulsa el botón para dejar una reseña.',
      button: 'Dejar reseña',
      close: 'Cerrar',
      alt: 'QR para dejar una reseña'
    },
    openingHoursSpecification: [
      {
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '21:30',
        closes: '02:00'
      }
    ]
    ,
    menu: {
      sections: [
        {
          id: 'cocktails',
          title: 'Cócteles',
          items: [
            { name: 'Mojito', description: 'Ron blanco, hierbabuena, lima y azúcar.', price: '7.5€' },
            { name: 'Piña Colada', description: 'Ron, crema de coco y jugo de piña.', price: '8€' },
            { name: 'Daiquiri', description: 'Ron, jugo de lima y sirope simple, servido frío.', price: '8€' },
            { name: 'Caipiroska', description: 'Vodka, lima y azúcar machacados.', price: '7€' }
          ]
        },
        {
          id: 'copas',
          title: 'Copas',
          items: [
            { name: 'Copa House', description: 'Mezcla especial de la casa.', price: '7€' },
            { name: 'Copa Premium', description: 'Licor premium y aderezos.', price: '10€' },
            { name: 'Copa Tropical', description: 'Cóctel afrutado servido en copa grande.', price: '8€' },
            { name: 'Copa Clásica', description: 'Selección clásica de la casa.', price: '7.5€' }
          ]
        },
        {
          id: 'beers',
          title: 'Cervezas',
          items: [
            { name: 'Cerveza Local', description: 'Cerveza de barril local.', price: '4€' },
            { name: 'Cerveza Internacional', description: 'Selección importada.', price: '5€' },
            { name: 'Cerveza Artesanal', description: 'Selección de cervezas artesanas.', price: '5.5€' },
            { name: 'Cerveza Sin Alcohol', description: 'Opción sin alcohol para disfrutar.', price: '3.5€' }
          ]
        },
        {
          id: 'shots',
          title: 'Chupitos',
          items: [
            { name: 'Shot Jamaica', description: 'Ron especiado con toque cítrico.', price: '3€' },
            { name: 'Shot Fire', description: 'Licor picante para valientes.', price: '3€' },
            { name: 'Shot Coco', description: 'Licor de coco con toque dulce.', price: '3€' },
            { name: 'Shot Limón', description: 'Explosión cítrica para despertar.', price: '3€' }
          ]
        },
        {
          id: 'soft',
          title: 'Refrescos',
          items: [
            { name: 'Refresco Cola', description: 'Refresco clásico.', price: '2.5€' },
            { name: 'Agua', description: 'Agua mineral.', price: '2€' },
            { name: 'Zumo de Naranja', description: 'Zumo recién exprimido.', price: '3€' },
            { name: 'Té Helado', description: 'Té frío con limón.', price: '2.5€' }
          ]
        }
      ]
    }
  },
  en: {
    home: 'Home',
    cocktails: 'Cocktails',
    contact: 'Contact',
    information: 'Information',
    welcomeMsg: 'Welcome to',
    mWords: ['REGGAE BAR', 'IDEAL SPOT','GOOD VIBES', 'PARADISE'],
    offerTitle: 'CUSTOMER FAVOURITES',
    offers: [
      { title: 'Cocktails', description: 'Enjoy a variety of exotic and refreshing cocktails.' },
      { title: 'Beers', description: 'Taste our local and international beers.' },
      { title: 'Shishas', description: 'Relax with our uniquely flavored shishas.' },
    ],
    ratingTitle: 'Our Ratings',
    contactAddress: 'Street Monaco 6, Los Cristianos, Tenerife',
    contactHours: 'Monday - Saturday: 21:30 - 02:00',
    contactPhone: '+34 666 017 531',
    contactEmail: 'koj.tenerife@gmail.com',
    siteName: 'Reggae Bar',
    seo: {
      home: {
        title: 'Reggae Bar - Home',
        description: 'Welcome to Reggae Bar - enjoy cocktails, music and great vibes.'
      },
      cocktails: {
        title: 'Reggae Bar - Cocktails',
        description: 'Browse our selection of exotic and refreshing cocktails.'
      },
      contact: {
        title: 'Reggae Bar - Contact',
        description: 'Find us, check opening hours and contact us by phone or email.'
      }
    }
    ,
    reviewModal: {
      title: [
        'Tell us about your experience!',
        'Share your good vibes!'
      ],
      body: 'Scan the QR or click the button below to leave a review.',
      button: 'Leave a review',
      close: 'Close',
      alt: 'QR to leave a review'
    },
    openingHoursSpecification: [
      {
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '21:30',
        closes: '02:00'
      }
    ]
    ,
    menu: {
      sections: [
        {
          id: 'cocktails',
          title: 'Cocktails',
          items: [
            { name: 'Mojito', description: 'White rum, mint, lime and sugar.', price: '€7.5' },
            { name: 'Piña Colada', description: 'Rum, coconut cream and pineapple juice.', price: '€8' },
            { name: 'Daiquiri', description: 'Rum, lime juice and simple syrup, served chilled.', price: '€8' },
            { name: 'Caipiroska', description: 'Vodka, lime and sugar crushed together.', price: '€7' }
          ]
        },
        {
          id: 'copas',
          title: 'Glasses',
          items: [
            { name: 'House Glass', description: 'House mix.', price: '€7' },
            { name: 'Premium Glass', description: 'Premium liquor and garnishes.', price: '€10' },
            { name: 'Tropical Glass', description: 'Fruity cocktail served in a large glass.', price: '€8' },
            { name: 'Classic Glass', description: 'Classic house selection.', price: '€7.5' }
          ]
        },
        {
          id: 'beers',
          title: 'Beers',
          items: [
            { name: 'Local Beer', description: 'Local draft beer.', price: '€4' },
            { name: 'International Beer', description: 'Imported selection.', price: '€5' },
            { name: 'Craft Beer', description: 'Selection of craft brews.', price: '€5.5' },
            { name: 'Non-Alcoholic Beer', description: 'Alcohol-free option to enjoy.', price: '€3.5' }
          ]
        },
        {
          id: 'shots',
          title: 'Shots',
          items: [
            { name: 'Shot Jamaica', description: 'Spiced rum with a citrus touch.', price: '€3' },
            { name: 'Shot Fire', description: 'Spicy liquor for the brave.', price: '€3' },
            { name: 'Coco Shot', description: 'Coconut liqueur with a sweet finish.', price: '€3' },
            { name: 'Lime Shot', description: 'Citrus burst to wake you up.', price: '€3' }
          ]
        },
        {
          id: 'soft',
          title: 'Soft Drinks',
          items: [
            { name: 'Cola', description: 'Classic soda.', price: '€2.5' },
            { name: 'Water', description: 'Mineral water.', price: '€2' },
            { name: 'Orange Juice', description: 'Freshly squeezed juice.', price: '€3' },
            { name: 'Iced Tea', description: 'Cold tea with lemon.', price: '€2.5' }
          ]
        }
      ]
    }
  },
  fr: {
    home: 'Accueil',
    cocktails: 'Cocktails',
    contact: 'Contact',
    information: 'Information',
    welcomeMsg: 'Bienvenue au',
    mWords: ['REGGAE BAR', 'ENDROIT IDÉAL','BONNES ONDES', 'PARADIS'],
    offerTitle: 'LES FAVORIS',
    offers: [
      { title: 'Cocktails', description: 'Profitez d\'une variété de cocktails exotiques et rafraîchissants.' },
      { title: 'Bières', description: 'Goûtez nos bières locales et internationales.' },
      { title: 'Chichas', description: 'Détendez-vous avec nos chichas aux saveurs uniques.' },
    ],
    ratingTitle: 'Nos Avis',
    contactAddress: 'Rue Monaco 6, Los Cristianos, Tenerife',
    contactHours: 'Lundi - Samedi: 21:30 - 02:00',
    contactPhone: '+34 666 017 531',
    contactEmail: 'koj.tenerife@gmail.com',
    siteName: 'Reggae Bar',
    seo: {
      home: {
        title: 'Reggae Bar - Accueil',
        description: 'Bienvenue au Reggae Bar - profitez de cocktails, musique et bonne ambiance.'
      },
      cocktails: {
        title: 'Reggae Bar - Cocktails',
        description: 'Découvrez notre sélection de cocktails exotiques et rafraîchissants.'
      },
      contact: {
        title: 'Reggae Bar - Contact',
        description: 'Trouvez-nous, consultez les horaires et contactez-nous par téléphone ou email.'
      }
    }
    ,
    reviewModal: {
      title: [
        "Racontez-nous votre expérience !",
        'Partagez vos bonnes ondes'
      ],
      body: 'Scannez le QR ou cliquez sur le bouton pour laisser un avis.',
      button: 'Laisser un avis',
      close: 'Fermer',
      alt: 'QR pour laisser un avis'
    },
    openingHoursSpecification: [
      {
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '21:30',
        closes: '02:00'
      }
    ]
    ,
    menu: {
      sections: [
        {
          id: 'cocktails',
          title: 'Cocktails',
          items: [
            { name: 'Mojito', description: 'Rhum blanc, menthe, citron vert et sucre.', price: '7.5€' },
            { name: 'Piña Colada', description: 'Rhum, crème de coco et jus d\'ananas.', price: '8€' },
            { name: 'Daiquiri', description: 'Rhum, jus de citron vert et sirop simple, servi frais.', price: '8€' },
            { name: 'Caipiroska', description: 'Vodka, citron vert et sucre écrasés.', price: '7€' }
          ]
        },
        {
          id: 'copas',
          title: 'Coupes',
          items: [
            { name: 'Coupe Maison', description: 'Mélange spécial de la maison.', price: '7€' },
            { name: 'Coupe Premium', description: 'Liqueur premium et garnitures.', price: '10€' },
            { name: 'Coupe Tropicale', description: 'Cocktail fruité servi dans une coupe.', price: '8€' },
            { name: 'Coupe Classique', description: 'Sélection classique de la maison.', price: '7.5€' }
          ]
        },
        {
          id: 'beers',
          title: 'Bières',
          items: [
            { name: 'Bière Locale', description: 'Bière pression locale.', price: '4€' },
            { name: 'Bière Internationale', description: 'Sélection importée.', price: '5€' },
            { name: 'Bière Artisanale', description: 'Sélection de bières artisanales.', price: '5.5€' },
            { name: 'Bière Sans Alcool', description: 'Option sans alcool à déguster.', price: '3.5€' }
          ]
        },
        {
          id: 'shots',
          title: 'Shots',
          items: [
            { name: 'Shot Jamaica', description: 'Rhum épicé avec une touche d\'agrumes.', price: '3€' },
            { name: 'Shot Fire', description: 'Liqueur épicée pour les courageux.', price: '3€' },
            { name: 'Shot Coco', description: 'Liqueur de coco avec une finale douce.', price: '3€' },
            { name: 'Shot Citron', description: 'Explosion d\'agrumes pour réveiller.', price: '3€' }
          ]
        },
        {
          id: 'soft',
          title: 'Boissons',
          items: [
            { name: 'Cola', description: 'Soda classique.', price: '2.5€' },
            { name: 'Eau', description: 'Eau minérale.', price: '2€' },
            { name: 'Jus d\'orange', description: 'Jus fraîchement pressé.', price: '3€' },
            { name: 'Thé glacé', description: 'Thé froid avec citron.', price: '2.5€' }
          ]
        }
      ]
    }
  }
};

export const defaultLocale = 'en';
