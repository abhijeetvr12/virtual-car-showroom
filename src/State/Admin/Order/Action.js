
// import api from "../../../config/apiConfig";
// import {
//   canceledOrderFailure,
//   canceledOrderRequest,
//   canceledOrderSuccess,
//   confirmedOrderFailure,
//   confirmedOrderRequest,
//   confirmedOrderSuccess,
//   deleteOrderFailure,
//   deleteOrderRequest,
//   deleteOrderSuccess,
//   deliveredOrderFailure,
//   deliveredOrderRequest,
//   deliveredOrderSuccess,
//   getOrdersFailure,
//   getOrdersRequest,
//   getOrdersSuccess,
 
//   shipOrderFailure,
//   shipOrderRequest,
//   shipOrderSuccess,
// } from "./ActionCreator";
// import { CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

// export const getOrders = (reqData) => {
//   console.log("get all orders ", reqData);
//   return async (dispatch) => {
//     dispatch({type:GET_ORDERS_REQUEST});
//     try {
     
//       const response = await api.get(`/api/admin/orders/`);
//       console.log("get all orders ", response.data);
//       dispatch({type:GET_ORDERS_SUCCESS,payload:response.data});
//     } catch (error) {
//       console.log("catch error ", error);
//       dispatch({type:GET_ORDERS_FAILURE,payload:error.message});
//     }
//   };
// };

// export const confirmOrder = (orderId) => async (dispatch) => {
//   dispatch({type:CONFIRMED_ORDER_REQUEST});

//   try {
//     const response = await api.put(
//       `/api/admin/orders/${orderId}/confirmed`
//     );
//     const data = response.data;
//     console.log("confirm_order ",data)
//     dispatch({type:CONFIRMED_ORDER_SUCCESS,payload:data});
//   } catch (error) {
//     dispatch(confirmedOrderFailure({type:CONFIRMED_ORDER_FAILURE,payload:error.message}));
//   }
// };

// export const shipOrder = (orderId) => {
//   return async (dispatch) => {
//     try {
//       dispatch({type:SHIP_ORDER_REQUEST});
//       const {data} = await api.put(`/api/admin/orders/${orderId}/ship`);
//       console.log(" shipped order",data)
//       dispatch({type:SHIP_ORDER_SUCCESS,payload:data});
//     } catch (error) {
//       dispatch({type:SHIP_ORDER_FAILURE,payload:error.message});
//     }
//   };
// };

// export const deliveredOrder = (orderId) => async (dispatch) => {
//   dispatch(deliveredOrderRequest());

//   try {
//     const response = await api.put(
//       `/api/admin/orders/${orderId}/deliver`
//     );
//     const data = response.data;
//     console.log("dilivered order ",data)
//     dispatch(deliveredOrderSuccess(data));
//   } catch (error) {
//     dispatch(deliveredOrderFailure(error.message));
//   }
// };

// export const cancelOrder = (orderId) => async (dispatch) => {
//   dispatch(canceledOrderRequest());

//   try {
//     const response = await api.put(
//       `/api/admin/orders/${orderId}/cancel`
//     );
//     const data = response.data;
//     dispatch(canceledOrderSuccess(data));
//   } catch (error) {
//     dispatch(canceledOrderFailure(error.message));
//   }
// };

// // Async action creator for deleting an order
// export const deleteOrder = (orderId) => {
//   return async(dispatch) => {
//     dispatch(deleteOrderRequest());     
//    try {
//      const {data} = await api.delete(`/api/admin/orders/${orderId}/delete`);
//      console.log("delete order ",data)
//      dispatch(deleteOrderSuccess(orderId));
//    } catch (error) {
//     console.log("catch error ",error)
//      dispatch(deleteOrderFailure(error));
//    }
      
//   };
// };


