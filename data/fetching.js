
export const fetchingSubreddit = (subredit, limit, category, setData, data )=>{
    setData({
      ...data, loading: true
    });
    fetch(`https://api.reddit.com/r/${subredit}/${category}.json?limit=${limit}`)
    .then(( resp )=>{ return resp.json() })
    .then(( resp )=>{ 
      setData({
        data: resp.data.children, error: false, loading: false
      });
    })
    .catch( (err) => { 
      setData({
        data: [], error: err, loading: false
      })
    }) 
  };
  

// title  | id | author |  num_comments  | created_utc  | thumbnail  | score  | url_overridden_by_dest

// https://www.reddit.com/gallery/op53jm