const API_HEY = "8d2e31af66893eb36eaa5222cc031742";
const API_BASE = "https://api.themoviedb.org/3";

/*
 - originais da netflix
 - recomendados
 - em alta (top rated)
 - ação
 - comedia
 - terror
 - romance
 - documentarios

*/

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: [],
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: [],
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: [],
      },
      {
        slug: "action",
        title: "Ação",
        items: [],
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: [],
      },
      {
        slug: "horror",
        title: "Terror",
        items: [],
      },
      {
        slug: "romance",
        title: "Romance",
        items: [],
      },
      {
        slug: "documentary",
        title: "Documentarios",
        items: [],
      },
    ];
  },
};
