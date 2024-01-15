import PlayList from "../static/playList.json";

const getListFromJson = (listName) => {
  const list = PlayList.filter((list) => list.listName === listName);
  return list.length > 1 ? {} : list[0];
};
export default getListFromJson;
