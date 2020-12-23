export const getPhotos = () => {
    return   fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESSKEY}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((resp)=>{
        return resp.json();
      }).then((json)=> {
        return json
      }).catch(function(ex) {
        throw ex;
    });
}

export const searchPhotos = (search) => {
    return   fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${process.env.REACT_APP_ACCESSKEY}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((resp)=>{
        return resp.json();
      }).then((json)=> {
        return json
      }).catch(function(ex) {
        throw ex;
    });
}