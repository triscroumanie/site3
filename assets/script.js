// Gallery data - facile à modifier
const galleryData = {
  arrival: {
    title: "Arrivée en Roumanie",
    description: "Notre arrivée en Roumanie - l'embarquement à Lyon Saint Exupéry jusqu'à l'auberge de Targu Neamt",
    images: [
      {
        src: "assets/img/J1/Rome aeroport groupe.jpg",
        alt: "Groupe avant embarquement",
        caption: "Groupe avant l'embarquement",
      },
      {
        src: "assets/img/J1/easyjet avion.jpg",
        alt: "Avion EasyJet",
        caption: "Embarquement à Lyon Saint Exupéry",
      },
      {
        src: "assets/img/J1/Rome aeroport.jpg",
        alt: "Aéroport de Rome",
        caption: "Aéroport de Rome",
      },
      {
        src: "assets/img/J1/Rome Roumanie avion.jpg",
        alt: "Embarquement Rome",
        caption: "Embarquement à l'Aéroport de Rome",
      },
      {
        src: "assets/img/J1/hotel roumanie.jpg",
        alt: "Auberge Targu Neamt",
        caption: "Auberge de Targu Neamt",
      },
      {
        src: "assets/img/J1/Auberge arrivée.jpg",
        alt: "Arrivée auberge",
        caption: "Arrivée à l'auberge",
      },
      {
        src: "assets/img/J1/manger.jpg",
        alt: "Repas auberge",
        caption: "Repas à l'auberge",
      },
    ],
  },
  day1: {
    title: "Jour 1 - Découverte du lycée",
    description:
      "Visite du lycée roumain, rencontre avec les correspondants, et découverte de la maison de l'écrivain Ion Greangá",
    images: [
      { src: "assets/img/J1/lycee roumain.jpg", alt: "Entrée lycée", caption: "Découverte du lycée" },
      {
        src: "assets/img/J1/plaque.jpg",
        alt: "Photo classe",
        caption: "Photo de classe avec les correspondants",
      },
      {
        src: "assets/img/J1/photo de classe².jpg",
        alt: "Photo classe",
        caption: "Photo de classe avec les correspondants",
      },
      
      { src: "assets/img/J1/lycee profs.jpg", alt: "Accueil", caption: "Accueil par la proviseure" },
      { src: "assets/img/J1/classe groupes salle.jpg", alt: "Accueil", caption: "Accueil par la proviseure" },

      {
        src: "assets/img/J1/groupe classe maison.jpg",
        alt: "Maison écrivain",
        caption: "Maison de l'écrivain Ion GREANGÁ",
      },
      {
        src: "assets/img/J1/ecrivain.jpg",
        alt: "Maison écrivain",
        caption: "Maison de l'écrivain Ion GREANGÁ",
      },
      {
        src: "assets/img/J1/visite maison ecrivain.jpg",
        alt: "Maison écrivain",
        caption: "Maison de l'écrivain Ion GREANGÁ",
      },
      {
        src: "assets/img/J1/musee tradition.jpg",
        alt: "Musée",
        caption: "Musée sur la région et ses traditions",
      },
      {
        src: "assets/img/J1/musee traditionnel.jpg",
        alt: "Musée",
        caption: "Musée sur la région et ses traditions",
      },
    ],
  },
  day2: {
    title: "Jour 2 - Citadelle de Neamț",
    description: "Visite de la magnifique citadelle de Neamț, exploration de l'histoire et des traditions roumaines",
    images: [
      {
        type: "video",
        src: "https://github.com/triscroumanie/site3/raw/refs/heads/main/assets/video/video2.mp4",
        poster: "assets/img/J2/vignette2_video_j2.png",
        alt: "Vidéo citadelle",
        caption: "\"NEAMŢ CITADEL\" vue du ciel",
      },

      { src: "assets/img/J2/chateau ensemble2.jpg", alt: "Citadelle", caption: "Citadelle de Neamț" },

      {
        type: "video",
        src: "https://github.com/triscroumanie/site3/raw/refs/heads/main/assets/video/video1.mp4",
        poster: "assets/img/J2/vignette_video_j2.png",
        alt: "Vidéo citadelle",
        caption: "Arrivée à la \"NEAMŢ CITADEL\"",
      },
      {
        src: "assets/img/J2/chateau.jpg",
        alt: "Groupe",
        caption: "Groupe arrivant à la citadelle",
      },
      {
        src: "assets/img/J2/matheo.jpg",
        alt: "Histoire",
        caption: "Explications de l'histoire de la citadelle",
      },
      {
        src: "assets/img/J2/piece.jpg",
        alt: "Intérieur",
        caption: "Intérieur de la citadelle",
      },
      {
        src: "assets/img/J2/tenue.jpg",
        alt: "Traditions",
        caption: "Tenues traditionnelles",
      },
      { src: "assets/img/J2/livres.jpg", alt: "Livres", caption: "Livres à la citadelle" },
      {
        src: "assets/img/J2/livre1.jpg",
        alt: "Livres",
        caption: "Livres à la citadelle",
      },
      {
        src: "assets/img/J2/chateau2.jpg",
        alt: "Fin de la visite",
        caption: "Fin de la visite de la citadelle",
      },
      {
        src: "assets/img/J2/photo_groupe.jpg",
        alt: "Photo de groupe",
        caption: "Photo de groupe",
      },
      {
        type: "video",
        src: "https://github.com/triscroumanie/site3/raw/refs/heads/main/assets/video/video3.mp4",
        poster: "assets/img/J2/vignette3_video_j2.png",
        alt: "Vidéo citadelle",
        caption: "Arrivée à la \"NEAMŢ CITADEL\"",
      },

    ],
  },
  day3: {
    title: "Jour 3 - Entreprise ELECTRA & Iaşi",
    description: "Visite de l'entreprise ELECTRA et exploration de la capitale historique Iaşi",
    images: [
      // matin – usine ELECTRA
      { src: "assets/img/J3/photo_15.jpg", alt: "Usine", caption: "Visite de l'usine ELECTRA", part: "morning" },
      { src: "assets/img/J3/photo_31.jpg", alt: "Usine", caption: "Visite de l'usine ELECTRA", part: "morning" },
      { src: "assets/img/J3/photo_12.jpg", alt: "Usine", caption: "Visite de l'usine ELECTRA", part: "morning" },
      { src: "assets/img/J3/photo_29.jpg", alt: "Usine", caption: "Visite de l'usine ELECTRA", part: "morning" },
      { src: "assets/img/J3/photo_02.jpg", alt: "Usine", caption: "Visite de l'usine ELECTRA", part: "morning" },
      { src: "assets/img/J3/photo_13.jpg", alt: "PCB ELECTRA", caption: "Panneau PCB ELECTRA", part: "morning" },
      { src: "assets/img/J3/photo_35.jpg", alt: "Usine", caption: "Présentation des procédés de fabrication d'interphones", part: "morning" },
      { src: "assets/img/J3/photo_27.jpg", alt: "Usine", caption: "Présentation des procédés de fabrication d'interphones", part: "morning" },
      { src: "assets/img/J3/photo_32.jpg", alt: "Usine", caption: "Présentation des procédés de fabrication d'interphones", part: "morning" },
      { src: "assets/img/J3/photo_33.jpg", alt: "Usine", caption: "Présentation des procédés de fabrication d'interphones", part: "morning" },
      { src: "assets/img/J3/photo_36.jpg", alt: "Usine", caption: "Présentation des procédés de fabrication d'interphones", part: "morning" },
      { src: "assets/img/J3/photo_26.jpg", alt: "Usine", caption: "Présentation des procédés de fabrication d'interphones", part: "morning" },
      { src: "assets/img/J3/photo_34.jpg", alt: "Usine", caption: "Présentation des procédés de fabrication d'interphones", part: "morning" },
      { src: "assets/img/J3/photo_37.jpg", alt: "Usine", caption: "Présentation des procédés de fabrication d'interphones", part: "morning" },

      // après‑midi – Iaşi
      { src: "assets/img/J3/photo_40.jpg", alt: "Iaşi", caption: "Palais de la culture de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_08.jpg", alt: "Iaşi", caption: "Palais de la culture de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_21.jpg", alt: "Iaşi", caption: "Palais de la culture de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_10.jpg", alt: "Iaşi", caption: "Découverte du palais de la culture de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_09.jpg", alt: "Iaşi", caption: "Découverte du palais de la culture de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_45.jpg", alt: "Iaşi", caption: "Découverte du palais de la culture de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_46.jpg", alt: "Iaşi", caption: "Découverte du palais de la culture de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_01.jpg", alt: "Iaşi", caption: "Palais de la culture de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_43.jpg", alt: "Iaşi", caption: "Centre commercial proche du palais de la culture", part: "afternoon" },
      { src: "assets/img/J3/photo_11.jpg", alt: "Iaşi", caption: "Centre commercial proche du palais de la culture", part: "afternoon" },
      { src: "assets/img/J3/photo_38.jpg", alt: "Iaşi", caption: "Centre commercial proche du palais de la culture", part: "afternoon" },
      { src: "assets/img/J3/photo_41.jpg", alt: "Iaşi", caption: "Visite de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_28.jpg", alt: "Iaşi", caption: "Visite de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_24.jpg", alt: "Iaşi", caption: "Monastère des Trois Saints Hiérarques", part: "afternoon" },
      { src: "assets/img/J3/photo_25.jpg", alt: "Iaşi", caption: "Monastère des Trois Saints Hiérarques", part: "afternoon" },
      { src: "assets/img/J3/photo_44.jpg", alt: "Iaşi", caption: "Monastère des Trois Saints Hiérarques", part: "afternoon" },
      { src: "assets/img/J3/photo_20.jpg", alt: "Iaşi", caption: "Monastère des Trois Saints Hiérarques", part: "afternoon" },
      { src: "assets/img/J3/photo_18.jpg", alt: "Iaşi", caption: "Visite de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_03.jpg", alt: "Iaşi", caption: "Hôtel de ville de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_42.jpg", alt: "Iaşi", caption: "Cathédrale Métropolitaine de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_23.jpg", alt: "Iaşi", caption: "Visite de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_19.jpg", alt: "Iaşi", caption: "Cathédrale Métropolitaine de Iaşi", part: "afternoon" },
      { src: "assets/img/J3/photo_17.jpg", alt: "Iaşi", caption: "Cathédrale Métropolitaine de Iaşi", part: "afternoon" },
    ],
  },
  day4: {
    title: "Jour 4 - Ateliers & découverte de bisons",
    description: "Atelier avec les correspondants, concours d'affiches et visite d'une réserve de bisons",
    images: [
      { src: "assets/img/J4/photo_01.jpg", alt: "Affiche Francofête", caption: "Concours d'affiches autour de la Francophonie", part: "morning" },
      { src: "assets/img/J4/photo_02.jpg", alt: "Affiches faites par les correspondants roumains", caption: "Concours d'affiches autour de la Francophonie", part: "morning" },
      { src: "assets/img/J4/photo_06.jpg", alt: "Présentation des affiches", caption: "Présentation des affiches créées par les élèves roumains", part: "morning" },
      { src: "assets/img/J4/photo_08.jpg", alt: "Affiche gagnante", caption: "Affiche gagnante du concours d'affiches", part: "morning" },
      { src: "assets/img/J4/photo_13.jpg", alt: "Démonstration des projets scolaires des correspondants", caption: "Démonstration des projets scolaires des correspondants roumains", part: "morning" },
      { src: "assets/img/J4/photo_14.jpg", alt: "Démonstration des projets scolaires des correspondants", caption: "Démonstration des projets scolaires des correspondants roumains", part: "morning" },
      { src: "assets/img/J4/photo_10.jpg", alt: "Démonstration des projets scolaires des correspondants", caption: "Démonstration des projets scolaires des correspondants roumains", part: "morning" },
      { src: "assets/img/J4/photo_11.jpg", alt: "Démonstration des projets scolaires des correspondants", caption: "Démonstration des projets scolaires des correspondants roumains", part: "morning" },
      { src: "assets/img/J4/photo_12.jpg", alt: "Démonstration des projets scolaires des correspondants", caption: "Démonstration des projets scolaires des correspondants roumains", part: "morning" },
      { src: "assets/img/J4/photo_09.jpg", alt: "Visite d'un parc de bisons", caption: "Visite d'un parc de bisons", part: "afternoon" },
      { src: "assets/img/J4/photo_03.jpg", alt: "Visite d'un parc de bisons", caption: "Visite d'un parc de bisons", part: "afternoon" },
      { src: "assets/img/J4/photo_04.jpg", alt: "Visite d'un parc de bisons", caption: "Visite d'un parc de bisons", part: "afternoon" },
      { src: "assets/img/J4/photo_17.jpg", alt: "Visite d'un parc de bisons", caption: "Visite d'un parc de bisons", part: "afternoon" },
      { src: "assets/img/J4/photo_05.jpg", alt: "Visite du monstère de Neamț", caption: "Visite du monstère de Neamț", part: "afternoon" },
      { src: "assets/img/J4/photo_07.jpg", alt: "VVisite du monstère de Neamț", caption: "Visite du monstère de Neamț", part: "afternoon" },
      { src: "assets/img/J4/photo_15.jpg", alt: "Visite du monstère de Neamț", caption: "Visite du monstère de Neamț", part: "afternoon" },
      { src: "assets/img/J4/photo_16.jpg", alt: "Visite du monstère de Neamț", caption: "Visite du monstère de Neamț", part: "afternoon" },
      { type: "video",src: "https://github.com/triscroumanie/site3/blob/2703322ca5b1c2e1962dbf5a06b27055e1d14693/assets/video/video_monastere.mp4?raw=true",  poster:"assets/img/J4/vignette_video_j4.png",alt: "Vidéo du monstère de Neamț", caption: "Vidéo du monstère de Neamț", part: "afternoon" },
    ],
  },
  day5: {
    title: "Jour 5 - Brașov",
    description: "Visite de la magnifique ville de Brașov, l'Église noire, de Bran",
    images: [

      // Brașov
      { src: "assets/img/J5/photo_34.jpg", alt: "Photo de groupe", caption: "Photo de groupe", part: "brasov" },
      { src: "assets/img/J5/photo_31.jpg", alt: "Place", caption: "Place de l'église", part: "brasov" },
      { src: "assets/img/J5/photo_35.jpg", alt: "Place", caption: "Place de l'église", part: "brasov" },
      { src: "assets/img/J5/photo_30.jpg", alt: "Place", caption: "Place de l'église", part: "brasov" },
      { src: "assets/img/J5/photo_26.jpg", alt: "Place", caption: "Place de l'église", part: "brasov" },
      { src: "assets/img/J5/photo_32.jpg", alt: "Église noire", caption: "Visite de l'Église noire de Brașov", part: "brasov" },
      { src: "assets/img/J5/photo_33.jpg", alt: "Statue de l'église", caption: "Statue de l'église noire", part: "brasov" },
      { src: "assets/img/J5/photo_28.jpg", alt: "Statue de l'église", caption: "Statue de l'église noire", part: "brasov" },
      { src: "assets/img/J5/photo_41.jpg", alt: "Église noire", caption: "Visite de l'Église noire de Brașov", part: "brasov" },
      { src: "assets/img/J5/photo_27.jpg", alt: "Église noire", caption: "Visite de l'Église noire de Brașov", part: "brasov" },
      { src: "assets/img/J5/photo_40.jpg", alt: "Église noire", caption: "Visite de l'Église noire de Brașov", part: "brasov" },
      { src: "assets/img/J5/photo_42.jpg", alt: "Église noire", caption: "Visite de l'Église noire de Brașov", part: "brasov" },
      { src: "assets/img/J5/photo_29.jpg", alt: "Panneau Brașov", caption: "Panneau Brașov", part: "brasov" },

      // Bran
      { src: "assets/img/J5/photo_17.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_16.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_08.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_18.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_06.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_22.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_07.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_12.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_20.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_25.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_10.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_11.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_14.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_15.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_13.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_21.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_24.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_09.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_23.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },
      { src: "assets/img/J5/photo_19.jpg", alt: "Château de Bran", caption: "Visite du château de Bran", part: "bran" },

      //Auberge
      { src: "assets/img/J5/photo_02.jpg", alt: "Arrivée", caption: "Arrivée à l'auberge de Bran", part: "auberge" },
      { src: "assets/img/J5/photo_01.jpg", alt: "Repas", caption: "Repas à l'auberge", part: "auberge" },
      { src: "assets/img/J5/photo_04.jpg", alt: "Auberge", caption: "Auberge de Bran", part: "auberge" },
      { src: "assets/img/J5/photo_03.jpg", alt: "Auberge", caption: "Panorama vu de l'auberge", part: "auberge" },
      { src: "assets/img/J5/photo_05.jpg", alt: "Auberge", caption: "Panorama vu de l'auberge", part: "auberge" },
      { src: "assets/img/J5/photo_43.jpg", alt: "Auberge", caption: "Panorama vu de l'auberge", part: "auberge" },


      // Trajet
      { src: "assets/img/J5/photo_36.jpg", alt: "Trajet", caption: "Trajet en direction de Bran", part: "trajet" },
      { src: "assets/img/J5/photo_37.jpg", alt: "Château de Bran", caption: "Trajet en direction de Bran", part: "trajet" },
      { src: "assets/img/J5/photo_38.jpg", alt: "Château de Bran", caption: "Trajet en direction de Bran", part: "trajet" },
      { src: "assets/img/J5/photo_39.jpg", alt: "Château de Bran", caption: "Trajet en direction de Bran", part: "trajet" },
      { src: "assets/img/J5/photo_44.jpg", alt: "Château de Bran", caption: "Trajet en direction de Bran", part: "trajet" },
      { src: "assets/img/J5/photo_45.jpg", alt: "Château de Bran", caption: "Trajet en direction de Bran", part: "trajet" },
    ],
  },
    day6: {
    title: "Jour 6 - Visite de Bucarest ainsi que du palais de Ceaușescu et retour à Lyon",
    description: "Retour à Lyon après une semaine de voyage en Roumanie",
    images: [

      { src: "assets/img/J6/photo_02.jpg", alt: "Trajet", caption: "Trajet vers Bucarest"},
      { src: "assets/img/J6/photo_10.jpg", alt: "Trajet", caption: "Trajet dans Bucarest"},
      { src: "assets/img/J6/photo_01.jpg", alt: "Trajet", caption: "Trajet vers Bucarest"},
      { src: "assets/img/J6/photo_24.jpg", alt: "Palais de Ceaușescu", caption: "Palais de Ceaușescu à Bucarest"},
      { src: "assets/img/J6/photo_18.jpg", alt: "Photo de groupe dans le palais de Ceaușescu", caption: "Photo de groupe dans le palais de Ceaușescu à Bucarest"},
      { src: "assets/img/J6/photo_15.jpg", alt: "Salle de spectacle du palais de Ceaușescu", caption: "Salle de spectacle du palais"},
      { src: "assets/img/J6/photo_05.jpg", alt: "Couloirs du palais", caption: "Couloirs du palais"},
      { src: "assets/img/J6/photo_13.jpg", alt: "Hall de l'Union (Sala Unirii)", caption: "Hall de l'Union (Sala Unirii)"},
      { src: "assets/img/J6/photo_14.jpg", alt: "Salle du palais", caption: "Salle du palais"},
      { src: "assets/img/J6/photo_17.jpg", alt: "Salle du palais", caption: "Salle du palais"},
      { src: "assets/img/J6/photo_04.jpg", alt: "Couloirs du palais", caption: "Couloirs du palais"},
      { src: "assets/img/J6/photo_03.jpg", alt: "Salle Ionescu", caption: "Salle Ionescu"},
      { src: "assets/img/J6/photo_12.jpg", alt: "Salle Ionescu", caption: "Salle Ionescu"},
      { src: "assets/img/J6/photo_08.jpg", alt: "Salle Ionescu", caption: "Salle Ionescu"},
      { src: "assets/img/J6/photo_11.jpg", alt: "Escalier du palais", caption: "Escalier du palais"},
      { src: "assets/img/J6/photo_19.jpg", alt: "Photo de groupe", caption: "Photo de groupe"},
      { src: "assets/img/J6/photo_23.jpg", alt: "Visite de Bucarest", caption: "Visite de Bucarest"},
      { src: "assets/img/J6/photo_09.jpg", alt: "Librairie dans Bucarest", caption: "Librairie dans Bucarest"},
      { src: "assets/img/J6/photo_20.jpg", alt: "Déjeuner dans un restaurant de Bucarest", caption: "Déjeuner dans un restaurant de Bucarest"},
      { src: "assets/img/J6/photo_06.jpg", alt: "Déjeuner dans un restaurant de Bucarest", caption: "Déjeuner dans un restaurant de Bucarest"},
      { src: "assets/img/J6/photo_07.jpg", alt: "Déjeuner dans un restaurant de Bucarest", caption: "Déjeuner dans un restaurant de Bucarest"},
      { src: "assets/img/J6/photo_22.jpg", alt: "Vol retour vers Lyon", caption: "Vol retour vers Lyon"},
      { src: "assets/img/J6/photo_21.jpg", alt: "Vol retour vers Lyon", caption: "Vol retour vers Lyon"},

    ],
  },
    parcoursup: {
    title: "Vœux Parcoursup",
    description: "Préparation et présentation des projets de Parcoursup, échanges sur les parcours d'orientation et les choix d'études supérieures",
    images: [
      { src: "assets/img/Parcoursup/photo_02.jpg", alt: "Vol retour vers Lyon", caption: "Vol retour vers Lyon"},
      ],
  },

}

// Mapping des clés `part` vers les libellés affichés (modifiez ici pour changer/ajouter des catégories)
const partLabels = {
  morning: "Matin",
  afternoon: "Après‑midi",
  brasov: "Brașov",
  auberge: "Auberge",
  trajet: "Trajet",
  bran: "Bran",
}

let currentImageIndex = 0
let currentImages = []

function disableBodyScroll() {
  document.body.style.overflow = "hidden"
}

function enableBodyScroll() {
  const galleryModal = document.getElementById("galleryModal")
  const lightbox = document.getElementById("lightbox")
  
  const galleryDisplay = window.getComputedStyle(galleryModal).display
  const lightboxDisplay = window.getComputedStyle(lightbox).display
  
  if (galleryDisplay === "none" && lightboxDisplay === "none") {
    document.body.style.overflow = "auto"
  }
}

function openDay(dayId) {
  const day = galleryData[dayId]
  document.getElementById("modalTitle").textContent = day.title
  document.getElementById("modalDescription").textContent = day.description

  const gallery = document.getElementById("galleryGrid")
  gallery.innerHTML = ""

  let lastPart = null
  day.images.forEach((img, index) => {
    // insert divider when part changes
    const part = img.part || null
    if (part && part !== lastPart) {
      const divider = document.createElement("div")
      divider.className = "gallery-part-divider"
      // utilise partLabels pour supporter des catégories arbitraires (villes, etc.)
      const label = (partLabels && partLabels[part]) || (part.charAt(0).toUpperCase() + part.slice(1))
      divider.textContent = label
      gallery.appendChild(divider)
      lastPart = part
    }

    if (img.type === "video") {
      const wrapper = document.createElement("div")
      wrapper.className = "video-thumb-wrapper"

      const thumb = document.createElement("img")
      thumb.src = img.poster || "/placeholder.svg"
      thumb.alt = img.alt || "Vidéo"
      thumb.className = "gallery-image video-thumb"

      const play = document.createElement("span")
      play.className = "play-icon"

      wrapper.appendChild(thumb)
      wrapper.appendChild(play)
      wrapper.onclick = (e) => {
        e.stopPropagation()
        openLightbox(day.images, index)
      }
      gallery.appendChild(wrapper)
    } else {
      const thumb = document.createElement("img")
      thumb.src = img.src
      thumb.alt = img.alt
      thumb.className = "gallery-image"
      // apply optional rotation class on thumbnail
      if (img.rotate) {
        const rotClass = `rot-${img.rotate}`
        thumb.classList.add(rotClass)
      }
      thumb.onclick = (e) => {
        e.stopPropagation()
        openLightbox(day.images, index)
      }
      gallery.appendChild(thumb)
    }
  })

  document.getElementById("galleryModal").style.display = "block"
  disableBodyScroll()
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none"
  enableBodyScroll()
}

function openLightbox(images, index) {
  currentImages = images
  currentImageIndex = index
  document.getElementById("lightbox").style.display = "flex"
  document.getElementById("lightbox").style.justifyContent = "center"
  document.getElementById("lightbox").style.alignItems = "center"
  disableBodyScroll()
  updateLightbox()
}

function closeLightbox() {
  const videoEl = document.getElementById("lightboxVideo")
  if (videoEl) {
    try { videoEl.pause() } catch (e) {}
    videoEl.src = ""
  }
  document.getElementById("lightbox").style.display = "none"
  enableBodyScroll()
}

function updateLightbox() {
  const item = currentImages[currentImageIndex]
  const imgEl = document.getElementById("lightboxImage")
  const videoEl = document.getElementById("lightboxVideo")
  const captionEl = document.getElementById("lightboxCaption")
  if (item.type === "video") {
    if (imgEl) imgEl.style.display = "none"
    if (videoEl) {
      videoEl.style.display = "block"
      videoEl.src = item.src
      videoEl.alt = item.alt || ""
      try { videoEl.currentTime = 0 } catch (e) {}
      videoEl.play().catch(() => {})
    }
  } else {
    if (videoEl) {
      try { videoEl.pause() } catch (e) {}
      videoEl.src = ""
      videoEl.style.display = "none"
    }
    if (imgEl) {
      imgEl.style.display = "block"
      imgEl.src = item.src
      imgEl.alt = item.alt || ""
      // remove any rotation classes then apply if present
      imgEl.classList.remove("rot-90","rot-180","rot-270")
      if (item.rotate) {
        const rotClass = `rot-${item.rotate}`
        imgEl.classList.add(rotClass)
      }
    }
  }
  if (captionEl) captionEl.textContent = item.caption || ""
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentImages.length
  updateLightbox()
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length
  updateLightbox()
}

// Fermer les modals en cliquant dehors
window.onclick = (event) => {
  const modal = document.getElementById("galleryModal")
  const lightbox = document.getElementById("lightbox")
  if (event.target === modal) {
    closeGallery()
  }
  if (event.target === lightbox) {
    closeLightbox()
  }
}

// Navigation au clavier
document.addEventListener("keydown", (e) => {
  if (document.getElementById("lightbox").style.display === "flex") {
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
    if (e.key === "Escape") closeLightbox()
  }
})

// Expose functions to global scope for inline `onclick` handlers
try {
  window.openDay = openDay
  window.closeGallery = closeGallery
  window.openLightbox = openLightbox
  window.closeLightbox = closeLightbox
  window.nextImage = nextImage
  window.prevImage = prevImage
} catch (e) {}
