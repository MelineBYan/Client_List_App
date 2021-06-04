import {
  CHANGE_MODAL_FORM,
  RESET_MODAL_DATA,
  SET_INITIALSTATE,
  TOGGLE_CHECKED,
  SET_EDITABLE_PROVIDER,
  CHANGE_PROVIDER,
  CREATE_PROVIDER,
  RESET_PROVIDER,
  DELETE_PROVIDER,
} from "../types";
import {
  maxLength,
  minLength,
  validateEmail,
  isRequired,
  isArmPhoneNumber,
} from "../../utils/helpers/validators";

const maxLength50 = maxLength(50);
const minLength1 = minLength(1);

const initialState = {
  name: "",
  email: "",
  phone: "",
  provider: "",
  providers: [],
  editableProvider: null,
  error: null,
};

const clientModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALSTATE: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case CHANGE_MODAL_FORM: {
      const { name, value } = action.payload;

      let error =
        (name !== "provider" && minLength1(value.trim())) ||
        (name !== "provider" && isRequired(value.trim(), name)) ||
        ((name === "name" || name === "email") && maxLength50(value.trim())) ||
        (name === "email" && validateEmail(value.trim())) ||
        (name === "phone" && isArmPhoneNumber(value.trim()));

      return {
        ...state,
        [name]: value,
        error,
      };
    }

    case TOGGLE_CHECKED: {
      let providersIds = [...state.providers].map((p) => p._id);
      let providers = [...state.providers];
      if (providersIds.includes(action.payload._id)) {
        providers = providers.filter((p) => p._id !== action.payload._id);
      } else {
        providers.push(action.payload);
      }
      return {
        ...state,
        providers,
      };
    }

    case DELETE_PROVIDER: {
      let providers = [...state.providers];
      providers = providers.filter((p) => p._id !== action.payload);
      return {
        ...state,
        providers,
      };
    }

    case SET_EDITABLE_PROVIDER: {
      return {
        ...state,
        editableProvider: action.payload,
      };
    }
    case CHANGE_PROVIDER: {
      let value = action.payload;
      const editableProvider = { ...state.editableProvider };
      editableProvider.name = value;
      let error = value
        ? minLength1(value.trim()) || maxLength50(value.trim())
        : null;
      return {
        ...state,
        editableProvider,
        error,
      };
    }
    case RESET_MODAL_DATA: {
      return initialState;
    }
    case RESET_PROVIDER: {
      return {
        ...state,
        provider: "",
      };
    }
    default:
      return state;
  }
};

export default clientModalReducer;
