export interface Module {
  _id: string;
  name: string;
  description: string;
}

interface ModuleState {
  modules: Module[];
}

const initialState: ModuleState = {
  modules: [],
};

// ✅ Reducer
const moduleReducer = (state = initialState, action: any): ModuleState => {
  switch (action.type) {
    case "modules/setModules":
      return { ...state, modules: action.payload };
    case "modules/addModule":
      return { ...state, modules: [...state.modules, action.payload] };
    case "modules/removeModule":
      return {
        ...state,
        modules: state.modules.filter((m) => m._id !== action.payload),
      };
    default:
      return state;
  }
};

export default moduleReducer;

export const setModules = (modules: Module[]) => ({
  type: "modules/setModules",
  payload: modules,
});

export const addModule = (module: Module) => ({
  type: "modules/addModule",
  payload: module,
});

export const removeModule = (id: string) => ({
  type: "modules/removeModule",
  payload: id,
});