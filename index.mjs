export const handler = async (event, context, callback) => {
  const operation = event.httpMethod;
  switch (operation) {
    case "ANY":
      let DATA = {
        'id' : 1,
        'name' : '하태웅'
      };
      callback(null, {
        'statusCode' : 200,
        'headers' : {}, 
        'body' : JSON.stringfy(DATA)
      });
      case "POST":
        callback(null, {
          'statusCode' : 200
        });
  }
};
