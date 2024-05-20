import React, { createContext, useReducer } from "react";
import Api from "../api/api";

const FETCH_LINE_DATA_REQUEST = "FETCH_LINE_DATA_REQUEST";
const FETCH_LINE_DATA_SUCCESS = "FETCH_LINE_DATA_SUCCESS";
const FETCH_LINE_DATA_FAILURE = "FETCH_LINE_DATA_FAILURE";

const FETCH_BAR_DATA_REQUEST = "FETCH_BAR_DATA_REQUEST";
const FETCH_BAR_DATA_SUCCESS = "FETCH_BAR_DATA_SUCCESS";
const FETCH_BAR_DATA_FAILURE = "FETCH_BAR_DATA_FAILURE";

const FETCH_DOUGHNUT_DATA_REQUEST = "FETCH_DOUGHNUT_DATA_REQUEST";
const FETCH_DOUGHNUT_DATA_SUCCESS = "FETCH_DOUGHNUT_DATA_SUCCESS";
const FETCH_DOUGHNUT_DATA_FAILURE = "FETCH_DOUGHNUT_DATA_FAILURE";

const FETCH_PIE_DATA_REQUEST = "FETCH_PIE_DATA_REQUEST";
const FETCH_PIE_DATA_SUCCESS = "FETCH_PIE_DATA_SUCCESS";
const FETCH_PIE_DATA_FAILURE = "FETCH_PIE_DATA_FAILURE";

const initialState = {
  lineData: { data: null, loading: false, error: null },
  barData: { data: null, loading: false, error: null },
  doughnutData: { data: null, loading: false, error: null },
  pieData: { data: null, loading: false, error: null },
};

export const Context = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_LINE_DATA_REQUEST:
      return {
        ...state,
        lineData: { ...state.lineData, loading: true, error: null },
      };
    case FETCH_LINE_DATA_SUCCESS:
      return {
        ...state,
        lineData: { ...state.lineData, loading: false, data: action.payload },
      };
    case FETCH_LINE_DATA_FAILURE:
      return {
        ...state,
        lineData: { ...state.lineData, loading: false, error: action.payload },
      };

    case FETCH_BAR_DATA_REQUEST:
      return {
        ...state,
        barData: { ...state.barData, loading: true, error: null },
      };
    case FETCH_BAR_DATA_SUCCESS:
      return {
        ...state,
        barData: { ...state.barData, loading: false, data: action.payload },
      };
    case FETCH_BAR_DATA_FAILURE:
      return {
        ...state,
        barData: { ...state.barData, loading: false, error: action.payload },
      };

    case FETCH_DOUGHNUT_DATA_REQUEST:
      return {
        ...state,
        doughnutData: { ...state.doughnutData, loading: true, error: null },
      };
    case FETCH_DOUGHNUT_DATA_SUCCESS:
      return {
        ...state,
        doughnutData: {
          ...state.doughnutData,
          loading: false,
          data: action.payload,
        },
      };
    case FETCH_DOUGHNUT_DATA_FAILURE:
      return {
        ...state,
        doughnutData: {
          ...state.doughnutData,
          loading: false,
          error: action.payload,
        },
      };

    case FETCH_PIE_DATA_REQUEST:
      return {
        ...state,
        pieData: { ...state.pieData, loading: true, error: null },
      };
    case FETCH_PIE_DATA_SUCCESS:
      return {
        ...state,
        pieData: { ...state.pieData, loading: false, data: action.payload },
      };
    case FETCH_PIE_DATA_FAILURE:
      return {
        ...state,
        pieData: { ...state.pieData, loading: false, error: action.payload },
      };

    default:
      return state;
  }
};

export const ChartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (type, url) => {
    const api = new Api();
    dispatch({ type: `${type}_REQUEST` });
    try {
      const response = await api.get(url);
      const data = response.data;
      dispatch({ type: `${type}_SUCCESS`, payload: data });
    } catch (error) {
      dispatch({ type: `${type}_FAILURE`, payload: error.message });
    }
  };

  const fetchLineData = () => fetchData("FETCH_LINE_DATA", "line-chart");
  const fetchBarData = () => fetchData("FETCH_BAR_DATA", "bar-chart");
  const fetchDoughnutData = () =>
    fetchData("FETCH_DOUGHNUT_DATA", "doughnut-chart");
  const fetchPieData = () => fetchData("FETCH_PIE_DATA", "pie-chart");

  return (
    <Context.Provider
      value={{
        state,
        fetchLineData,
        fetchBarData,
        fetchDoughnutData,
        fetchPieData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
