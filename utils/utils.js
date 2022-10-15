export const trimAndLowerCaseStr = (str) => {
    return str.trim().toLowerCase()
}

export const inputValidation = (str) => {
    let pattern = /^[a-z]*$/
    let errorMessage = null;
    let isInvalid = false;
      str.trim().toLowerCase()
      if (str == '' || str == null) {
        errorMessage = "Enter an ingredient name";
        isInvalid = true;
      } else if (str.length < 3) {
        errorMessage="Enter minimum 3 characters";
        isInvalid = true;
      } else if (!str.match(pattern)) {
        errorMessage="Enter valid name";
        isInvalid = true;
    }
    return { isInvalid, errorMessage };
}

export const isInDatabase = (str, dbWithResults) => {
    let isInDb = false;
    let readyResponse = null;
    str.trim().toLowerCase()
    if (dbWithResults) {
        dbWithResults.forEach(element => {
            if(element.name === str) {
                readyResponse = element.response;
                isInDatabase = true;
            }
        });
    }    
    return { isInDb, readyResponse };
}




