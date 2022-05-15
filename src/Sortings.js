export const firstNameASC = (data) => {
  return data.sort((a, b) => {
    let fa = a.first_name.toLowerCase(),
      fb = b.first_name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
};

export const firstNameDESC = (data) => {
  data.sort((a, b) => {
    let fa = a.first_name.toLowerCase(),
      fb = b.first_name.toLowerCase();
    if (fa > fb) {
      return -1;
    }
    if (fa < fb) {
      return 1;
    }

    return 0;
  });
};

export const lastNameASC = (data) => {
    return data.sort((a, b) => {
      let fa = a.last_name.toLowerCase(),
        fb = b.last_name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  };
  export const lastNameDESC = (data) => {
    return data.sort((a, b) => {
      let fa = a.last_name.toLowerCase(),
        fb = b.last_name.toLowerCase();
        if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
      
          return 0;
    });
  };

  export const ageDESC = (data) => {
    return data.sort((a, b) => {
      let fa = a.age,
        fb = b.age;
        if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
      
          return 0;
    });
  };
  export const ageASC=(data)=>{
    return data.sort((a, b) => {
        let fa = a.age,
          fb = b.age;
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
  }

  export const emailASC=(data)=>{
    return data.sort((a, b) => {
        let fa = a.email,
          fb = b.email;
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
  }

  export const emailDESC = (data) => {
    return data.sort((a, b) => {
      let fa = a.email,
        fb = b.email;
        if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
      
          return 0;
    });
  };


  export const webASC=(data)=>{
    return data.sort((a, b) => {
        let fa = a.web,
          fb = b.web;
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
  }

  export const webDESC = (data) => {
    return data.sort((a, b) => {
      let fa = a.web,
        fb = b.web;
        if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
      
          return 0;
    });
  };