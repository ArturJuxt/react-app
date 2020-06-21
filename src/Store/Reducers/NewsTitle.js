import { ADD_TITLE } from '../Constants/NewsTitle';

const initialState = {
  titleText: [
    {
      id: 1,
      title: "Web ",
      text: " Всеми́рная паути́на распределённая система, предоставляющая доступ к связанным между собой документам, расположенным на различных компьютерах, подключённых к сети Интернет. ",
      author: "Guest",
    },
    {
      id: 2,
      title: "PHP ",
      text: " это широко используемый язык сценариев общего назначения с открытым исходным кодом. Говоря проще, PHP это язык программирования, специально разработанный для написания web-приложений. ",
      author: "Artur",
    }
  ],
};

const NewsReducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return {
        ...store,
        titleText: [...store.titleText, action.payload],
      };
    default:
      return store;
  }
};

export default NewsReducer;
