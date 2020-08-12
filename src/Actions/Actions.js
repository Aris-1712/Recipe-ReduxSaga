
export const AddRecipesAsync = (obj) => {
  return {
    type: "ADD_ASYNC",
    payLoad: obj,
  };
};

export const RemRecipesAsync = (obj) => {
  return {
    type: "REM_ASYNC",
    payLoad: obj,
  };
};

export const EditRecipesAsync = (obj) => {
  return {
    type: "EDIT_ASYNC",
    payLoad: obj,
  };
};
