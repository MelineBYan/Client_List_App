import * as types from "../redux/types";

export const API_HOST = process.env.REACT_APP_API_URL;

//actionCreators
export const setLoading = () => {
  return {
    type: types.SET_LOADING,
  };
};
export const setError = (message) => {
  return {
    type: types.SET_ERROR,
    payload: message,
  };
};
export const setSuccess = (message) => {
  return {
    type: types.SET_SUCCESS,
    payload: message,
  };
};

// Client
export const getClients = (clients) => {
  return {
    type: types.GET_CLIENTS,
    payload: clients,
  };
};
export const deleteClient = (id) => {
  return {
    type: types.REMOVE_CLIENT,
    payload: id,
  };
};

export const setIsOpenModal = (isOpen) => {
  return {
    type: types.SET_ISOPENMODAL,
    payload: isOpen,
  };
};

export const addClient = (client) => {
  return {
    type: types.ADD_CLIENT,
    payload: client,
  };
};

export const setEditableClient = (value) => {
  return {
    type: types.SET_EDITABLE_CLIENT,
    payload: value,
  };
};

export const setIsOpenConfirmModal = (isOpen) => {
  return {
    type: types.SET_ISOPENCONFIRMMODAL,
    payload: isOpen,
  };
};

export const editClient = (value) => {
  return {
    type: types.EDIT_CLIENT,
    payload: value,
  };
};

//Provider
export const getProviders = (providers) => {
  return {
    type: types.GET_PROVIDERS,
    payload: providers,
  };
};

export const addProvider = (provider) => {
  return {
    type: types.ADD_PROVIDER,
    payload: provider,
  };
};
export const changeProvider = (value) => {
  return {
    type: types.CHANGE_PROVIDER,
    payload: value,
  };
};

export const editProvider = (prov) => {
  return {
    type: types.EDIT_PROVIDER,
    payload: prov,
  };
};
export const deleteProvider = (id) => {
  return {
    type: types.REMOVE_PROVIDER,
    payload: id,
  };
};

export const setEditableProvider = (prov) => {
  return {
    type: types.SET_EDITABLE_PROVIDER,
    payload: prov,
  };
};

export const resetProvider = () => {
  return {
    type: types.RESET_PROVIDER,
  };
};

//ClientModal
export const resetModalData = () => {
  return {
    type: types.RESET_MODAL_DATA,
  };
};

export const changeModalForm = (data) => {
  return {
    type: types.CHANGE_MODAL_FORM,
    payload: data,
  };
};

export const setModalInitialState = (data) => {
  return {
    type: types.SET_INITIALSTATE,
    payload: data,
  };
};

export const toggleCheckedProvider = (provider) => {
  return {
    type: types.TOGGLE_CHECKED,
    payload: provider,
  };
};

//Search
export const changeSearchValue = (target) => {
  return {
    type: types.CHANGE_SEARCH_VALUE,
    payload: target,
  };
};
export const toggleClick = (value) => {
  return {
    type: types.TOGGLE_CLICK,
    payload: value,
  };
};

export const setDropdownValue = (...data) => {
  return {
    type: types.SET_DROPDOWN_VALUE,
    payload: data,
  };
};
export const setDatepickerDate = (...data) => {
  return {
    type: types.SET_DATEPICKER_DATE,
    payload: data,
  };
};
export const resetSearchData = () => {
  return {
    type: types.RESET_SEARCH_DATA,
  };
};

//actionThunks
// Client
export const setClients = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await fetch(`${API_HOST}/client`);
    const data = await res.json();
    if (data.error) throw data.error;
    dispatch(getClients(data.clients));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

export const createClient = (client) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await fetch(`${API_HOST}/client`, {
      method: "POST",
      body: JSON.stringify(client),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    if (data.error) throw data.error;
    dispatch(addClient(data));
    dispatch(resetModalData());
  } catch (err) {
    dispatch(setError(err.message));
  }
};
export const updateClient = (client) => async (dispatch) => {
  console.log(JSON.stringify(client));
  try {
    dispatch(setLoading());
    const response = await fetch(`${API_HOST}/client/${client._id}`, {
      method: "PUT",
      body: JSON.stringify(client),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();

    if (data.error) throw data.error;

    dispatch(editClient(data));
    dispatch(resetModalData());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const setEditable = (value) => async (dispatch) => {
  dispatch(setEditableClient(value));
};
export const removeClient = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await fetch(`${API_HOST}/client/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.error) throw data.error;
    dispatch(deleteClient(id));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

//Provider
export const setProviders = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await fetch(`${API_HOST}/provider`);
    const data = await res.json();
    if (data.error) throw data.error;
    dispatch(getProviders(data.providers));
  } catch (err) {
    dispatch(setError(err.message));
  }
};
export const createProvider = (provider) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await fetch(`${API_HOST}/provider`, {
      method: "POST",
      body: JSON.stringify(provider),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    if (data.error) throw data.error;
    dispatch(addProvider(data));
    setProviders();
    dispatch(resetProvider());
  } catch (err) {
    dispatch(setError(err.message));
  }
};

export const updateProvider = async (provider, dispatch) => {
  try {
    dispatch(setLoading());
    const response = await fetch(`${API_HOST}/provider/${provider._id}`, {
      method: "PUT",
      body: JSON.stringify(provider),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    if (data.error) throw data.error;
    dispatch(editProvider(data));
    dispatch(setProviders());
  } catch (error) {
    console.log("error");
    dispatch(setError(error.message));
  }
};

export const removeProvider = async (id, dispatch) => {
  try {
    dispatch(setLoading());
    const res = await fetch(`${API_HOST}/provider/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.error) throw data.error;
    dispatch(deleteProvider(id));
    setProviders();
  } catch (err) {
    dispatch(removeClient(err.message));
  }
};

//ClientModal
export const submitClientModalForm = async (state, onSubmit, dispatch) => {
  try {
    const body = { ...state };
    delete body.provider;
    delete body.editableProvider;
    delete body.error;
    let providers = [...body.providers];
    providers = providers.map((p) => p._id);
    console.log({ ...body, providers });
    onSubmit({ ...body, providers });
  } catch (err) {
    console.error(err.message);
  }
};

//Search
export const sortOrFilrterTasks = async (dispatch, state) => {
  try {
    let body = { ...state };
    delete body.click;
    let query = Object.entries(body)
      .reduce(
        (q, elem) => q + (elem[1] ? elem[0] + "=" + elem[1] + "&" : ""),
        "?"
      )
      .slice(0, -1);
    if (query.length > 1) {
      dispatch(setLoading());
      const res = await fetch(`${API_HOST}/CLIENT${query}`);
      const data = await res.json();
      if (data.error) throw data.error;
      dispatch(
        setSuccess(
          data.clients.length
            ? "Clients were sorted successfully!"
            : "There are no founded clients!"
        )
      );
      dispatch(getClients(data.clients));
      dispatch(resetSearchData());
      dispatch(toggleClick(false));
    }
  } catch (err) {
    dispatch(setError(err.message));
  }
};
