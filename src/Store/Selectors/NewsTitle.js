export const getNews = (store) => store.newsTitle.titleText;
export const getOneNews = (store, id) => store.newsTitle.titleText.find(n => n.id === id);