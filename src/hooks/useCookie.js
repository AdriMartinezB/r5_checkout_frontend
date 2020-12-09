const useCookie = (data) => {
  const dataJSON1 = data.replace(/=/g, ':');
  const dataJSON = dataJSON1.replace(/}; {/g, ',');
  const newData = JSON.parse(dataJSON);

  return newData;

};

export default useCookie;
