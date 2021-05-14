import * as types from "../../redux/types";

const initialState = {
  clients: [],
  providersList: [],
  isOpenModal: false,
  isOpenConfirmModal: false,
  editableClient: null,
  successMessage: null,
  errorMessage: null,
  loading: false,
};

const clientReduser = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CLIENTS: {
      return {
        ...state,
        clients: action.payload,
        loading: false,
      };
    }
    case types.SET_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
        successMessage: null,
        loading: false,
      };
    }
    case types.SET_SUCCESS: {
      return {
        ...state,
        successMessage: action.payload,
        errorMessage: null,
        loading: false,
      };
    }
    case types.REMOVE_CLIENT: {
      let clients = [...state.clients];
      clients = clients.filter((t) => t._id !== action.payload);
      return {
        ...state,
        clients,
        successMessage: "Client was removed successfully!",
        errorMessage: null,
        loading: false,
        isOpenModal: false,
        isOpenConfirmModal: false,
        editableClient: null,
      };
    }
    case types.SET_ISOPENMODAL: {
      return {
        ...state,
        isOpenModal: action.payload,
      };
    }

    case types.ADD_CLIENT: {
      const providers =
        action.payload.providers.length &&
        state.providersList.filter((p) =>
          action.payload.providers.includes(p._id)
        );

      const client = { ...action.payload, providers };
      const clients = [...state.clients, client];

      return {
        ...state,
        clients,
        isOpenModal: false,
        loading: false,
        successMessage: "Client was added successfully!",
        errorMessage: null,
      };
    }

    case types.EDIT_CLIENT: {
      const clients = [...state.clients];
      const providers = state.providersList.filter((p) =>
        action.payload.providers.includes(p._id)
      );
      clients[clients.findIndex((c) => c._id === action.payload._id)] = {
        ...action.payload,
        providers,
      };
      return {
        ...state,
        clients,
        isOpenModal: false,
        editableClient: null,
        errorMessage: null,
        loading: false,
        successMessage: "Client was updated successfully!",
      };
    }
    case types.SET_ISOPENCONFIRMMODAL: {
      return {
        ...state,
        isOpenConfirmModal: action.payload,
      };
    }

    case types.SET_EDITABLE_CLIENT: {
      return {
        ...state,
        editableClient: action.payload,
        isOpenModal: true,
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        successMessage: null,
      };
    }

    case types.GET_PROVIDERS: {
      return {
        ...state,
        providersList: action.payload,
        loading: false,
      };
    }

    case types.EDIT_PROVIDER: {
      const providersList = [...state.providersList];
      providersList[
        providersList.findIndex((p) => p._id === action.payload._id)
      ] = action.payload;
      return {
        ...state,
        providersList,
        loading: false,
        errorMessage: null,
        successMessage: "Provider was updated successfully!",
      };
    }

    case types.ADD_PROVIDER: {
      const providersList = [...state.providersList, { ...action.payload }];
      return {
        ...state,
        providersList,
        errorMessage: null,
        successMessage: "Provider was added successfully!",
        loading: false,
      };
    }
    case types.REMOVE_PROVIDER: {
      let providersList = [...state.providersList];
      providersList = providersList.filter((p) => p._id !== action.payload);
      return {
        ...state,
        providersList,
        errorMessage: null,
        successMessage: "Provider was removed successfully!",
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default clientReduser;
