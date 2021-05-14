import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import ClientList from "./components/ClientList/ClientList";
import { ToastContainer, toast } from "react-toastify";

const App = (props) => {
  const { errorMessage, successMessage } = props;
  useEffect(() => {
    errorMessage &&
      toast.error(`🦄 ${errorMessage}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, [errorMessage]);

  useEffect(() => {
    successMessage &&
      toast.success(`🦄 ${successMessage}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, [successMessage]);
  return (
    <>
      <ClientList />
      <ToastContainer />
    </>
  );
};
const mapStateToProps = (state) => ({
  errorMessage: state.clientReducer.errorMessage,
  successMessage: state.clientReducer.successMessage,
});
export default connect(mapStateToProps, null)(App);
